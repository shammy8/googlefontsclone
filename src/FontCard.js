import React from "react";
import { Helmet } from "react-helmet";

function FontCard({
  addPlusSigns,
  familyName,
  typeSomething,
  fontSize,
  addFont
}) {
  return (
    <div className="fontcard">
      <div className="font-title">
        <Helmet>
          {/* Helmet adds the following to the head tag of index.html, add the neccesary link tag for each google fonts*/}
          <link
            href={`https://fonts.googleapis.com/css?family=${addPlusSigns(
              familyName
            )}`}
            rel="stylesheet"
          ></link>
        </Helmet>
        <h4>{familyName}</h4>
        <div
          className="fa fa-plus-circle"
          onClick={() => addFont(familyName)} // add the corresponding font (font selected by user) into the addedFont array
        ></div>
      </div>
      <p
        style={{
          fontSize: fontSize, //change the font size to what the user selected
          fontFamily: familyName //change the font family to the corresponding font family of the fontcard
        }}
      >
        {typeSomething}{" "}
        {/* change the sample text to whatever the user type (or a randomly assigned quote if left empty) */}
      </p>
    </div>
  );
}

export default FontCard;
