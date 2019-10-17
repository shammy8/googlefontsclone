import React, { useEffect } from "react";
import FontCard from "./FontCard";
//import { async } from "q";

function Main({ searchFonts, typeSomething, fontSize }) {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBNl7lcNRNpxnZNrKVoDnoCXrN5a8jpCas&sort=popularity"
      );
      const data = await response.json();
      const fonts = data.items;
      console.log(fonts);
    }
    fetchData();
  }, []);

  return (
    <div className="fontcards-container">
      <div className="fontcards">
        <FontCard
          family="Roboto"
          searchFonts={searchFonts}
          typeSomething={
            typeSomething.length === 0 ? "Hello World" : typeSomething
          }
          fontSize={fontSize}
        />
        <FontCard
          family="Open Sans"
          typeSomething={
            typeSomething.length === 0 ? "Hello World" : typeSomething
          }
          fontSize={fontSize}
        />
        <FontCard
          family="Lato"
          typeSomething={
            typeSomething.length === 0 ? "Hello World" : typeSomething
          }
          fontSize={fontSize}
        />
        <FontCard
          family="Montserrat"
          typeSomething={
            typeSomething.length === 0 ? "Hello World" : typeSomething
          }
          fontSize={fontSize}
        />
        <FontCard
          family="Roboto Condensed"
          typeSomething={
            typeSomething.length === 0 ? "Hello World" : typeSomething
          }
          fontSize={fontSize}
        />
      </div>
    </div>
  );
}

export default Main;
