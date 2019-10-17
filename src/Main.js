import React, { useState, useEffect } from "react";
import FontCard from "./FontCard";

function Main({ searchFonts, typeSomething, fontSize }) {
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBNl7lcNRNpxnZNrKVoDnoCXrN5a8jpCas&sort=popularity"
      );
      const data = await response.json();
      const fontsData = data.items;
      setFonts(fontsData);
      console.log(fontsData);
    }
    fetchData();
  }, []);

  //search (filter) feature
  const filteredFonts = fonts.filter(font => {
    return font.family.toLowerCase().indexOf(searchFonts.toLowerCase()) !== -1;
  });

  return (
    <div className="fontcards-container">
      <div className="fontcards">
        {filteredFonts.map(font => (
          <FontCard
            key={font.family}
            family={font.family}
            searchFonts={searchFonts}
            typeSomething={
              typeSomething.length === 0 ? "Hello World" : typeSomething
            }
            fontSize={fontSize}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
