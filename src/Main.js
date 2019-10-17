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
      const fontssss = data.items;
      setFonts(fontssss.slice(0, 9)); //this just takes the first 9 fonts. remove once we can load on scroll
      console.log(fontssss);
    }
    fetchData();
  }, []);

  return (
    <div className="fontcards-container">
      <div className="fontcards">
        {fonts.map(font => (
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
        ;
      </div>
    </div>
  );
}

export default Main;
