import React from "react";
import FontCard from "./FontCard";

function Main({ searchFonts, typeSomething, fontSize }) {
  // https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBNl7lcNRNpxnZNrKVoDnoCXrN5a8jpCas&sort=popularity
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
