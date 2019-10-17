import React from "react";
import FontCard from "./FontCard";

function Main() {
  // https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBNl7lcNRNpxnZNrKVoDnoCXrN5a8jpCas&sort=popularity
  return (
    <div className="fontcards-container">
      <div className="fontcards">
        <FontCard
          family="Roboto"
          text="Hello World"
          files="http://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf"
        />
        <FontCard
          family="Open Sans"
          text="Hello World"
          files="http://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf"
        />
        <FontCard
          family="Lato"
          text="Hello World"
          files="http://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf"
        />
        <FontCard
          family="Montserrat"
          text="Hello World"
          files="http://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf"
        />
        <FontCard
          family="Roboto Condensed"
          text="Hello World"
          files="http://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf"
        />
      </div>
    </div>
  );
}

export default Main;
