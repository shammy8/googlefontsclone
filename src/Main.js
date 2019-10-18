import React, { useState, useEffect } from "react";
import FontCard from "./FontCard";
import inspirationalQuotes from "./quotes";

function Main({ searchFonts, typeSomething, fontSize }) {
  const [fonts, setFonts] = useState([]);
  const [numberOfFonts, setNumberOfFonts] = useState(20);
  const [atBottom, setAtBottom] = useState(false);

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
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setAtBottom(true);
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

  // console.log(inspirationalQuotes.length);
  const randomQuote = () => {
    const randomNum = Math.floor(Math.random() * inspirationalQuotes.length);
    const randomQuote = inspirationalQuotes[randomNum];
    return randomQuote;
  };

  return (
    <div className="fontcards-container">
      <div className="fontcards">
        {displayedFonts.map(font => (
          <FontCard
            key={font.family}
            family={font.family}
            searchFonts={searchFonts}
            typeSomething={
              typeSomething.length === 0 ? randomQuote() : typeSomething
            }
            fontSize={fontSize}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
