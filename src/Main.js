import React, { useState, useEffect } from "react";
import FontCard from "./FontCard";
import inspirationalQuotes from "./quotes";

function Main({ searchFonts, typeSomething, fontSize, isList }) {
  const [fonts, setFonts] = useState([]);
  const [numberOfFonts, setNumberOfFonts] = useState(20);
  const [atBottom, setAtBottom] = useState(false);
  const [atTop, setAtTop] = useState(true);

  //fetch all the fonts from Google Fonts API
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

  //if at bottom of the screen change atBottom state to true
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
      <div className="fontcards-container">
        <div
          className="fontcards"
          style={
            isList
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
            />
          ))}
        </div>
      </div>
      <div
        className="to-top"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        style={atTop ? { display: "none" } : { display: "flex" }}
      >
        <div className="fa fa-long-arrow-up"></div>
      </div>
    </div>
  );
}

export default Main;
