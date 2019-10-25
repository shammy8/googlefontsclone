import React, { useState, useEffect } from "react";
import FontCard from "./FontCard";
import inspirationalQuotes from "./quotes";

function Main({
  addPlusSigns,
  searchFonts,
  typeSomething,
  fontSize,
  isList,
  addFont,
  sticky,
  setSticky
}) {
  const [fonts, setFonts] = useState([]); // used to hold the fonts from google fonts API
  const [numberOfFonts, setNumberOfFonts] = useState(20); // number of fonts to be displayed, initialise at 20
  const [atBottom, setAtBottom] = useState(false); // state for if user has scrolled to bottom, used to render more fonts in
  const [atTop, setAtTop] = useState(true); // state for if user has scrolled to top, used to remove the button to go back to top of page when user is at the top of the page

  //fetch all the fonts from Google Fonts API and store in the font state
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBNl7lcNRNpxnZNrKVoDnoCXrN5a8jpCas&sort=popularity"
      );
      const data = await response.json();
      const fontsData = data.items;
      setFonts(fontsData);
    }
    fetchData();
  }, []);

  //search (filter) feature
  const filteredFonts = fonts.filter(font => {
    return font.family.toLowerCase().indexOf(searchFonts.toLowerCase()) !== -1;
  });

  //Only display some of the fonts (for infinite scroll feature)
  const displayedFonts = filteredFonts.slice(0, numberOfFonts);

  //add event listener to scroll please see handleScroll function
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //change states depending where the user has scrolled to
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 2 >= // worked before with just !==, then today (22/10/19) stopped working even when I go back to previous commits with GIT???? Now have to change to + 2
      document.documentElement.offsetHeight
    ) {
      setAtBottom(true);
    }
    if (window.pageYOffset === 0) {
      setAtTop(true);
    } else {
      setAtTop(false);
    }
    if (window.pageYOffset > 95) {
      setSticky(true); // sticky state is used for sticking searchbar to top of window when user scrolls down
    } else {
      setSticky(false);
    }
  }

  //if atBottom is true run increaseNoOfFonts function
  useEffect(() => {
    if (!atBottom) return;
    increaseNoOfFonts();
  }, [atBottom]);

  //increase the number of fonts and then set atBottom back to false
  const increaseNoOfFonts = () => {
    setNumberOfFonts(prevnum => prevnum + 12);
    setAtBottom(false);
  };

  // assign a quote based on the index position of the fontcard
  const assignQuote = index => {
    return inspirationalQuotes[index % inspirationalQuotes.length];
  };

  return (
    <div>
      <div
        className={
          sticky
            ? "fontcards-container sticky-fontcards" // adds another css class when searchbar sticks to top of page, as searchbar changes to position:fixed the fontcards will jump up as they now ignore the space taken by searchbar, so this css class stops all the font card from suddenly jumping
            : "fontcards-container"
        }
      >
        <div
          className="fontcards"
          style={
            isList // changes the amount of columns in the fontcards to one when user changes to list view
              ? { gridTemplateColumns: "1fr" }
              : { gridTemplateColumns: "" }
          }
        >
          {displayedFonts.map((font, index) => (
            <FontCard
              key={font.family}
              familyName={font.family}
              typeSomething={
                typeSomething.length === 0 ? assignQuote(index) : typeSomething //show whatever the user has type in the typesomething input box in the font card, if left blank assign a quote to be displayed
              }
              fontSize={fontSize}
              addFont={addFont}
              addPlusSigns={addPlusSigns}
            />
          ))}
        </div>
      </div>
      <div
        className="to-top" // button to scroll to top of page
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        style={atTop ? { display: "none" } : { display: "flex" }} // the to-top button disappears when user is scrolled to top of page
      >
        <div className="fa fa-long-arrow-up"></div>
      </div>
    </div>
  );
}

export default Main;
