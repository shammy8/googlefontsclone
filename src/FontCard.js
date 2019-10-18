import React from "react";
import { Helmet } from "react-helmet";

function FontCard({ familyName, typeSomething, fontSize }) {
  //Add plus signs between words in the name of the font, to be used to retrive the fonts using the url
  const addPlusSigns = familyName => {
    if (familyName.indexOf(" ") === -1) {
      return familyName;
    } else {
      return familyName.split(" ").join("+");
    }
  };

  return (
    <div className="fontcard">
      <div className="font-title">
        <Helmet>
          <link
            href={`https://fonts.googleapis.com/css?family=${addPlusSigns(
              familyName
            )}`}
            rel="stylesheet"
          ></link>
        </Helmet>
        <h4>{familyName}</h4>
        <div className="fa fa-plus-circle"></div>
      </div>
      <p
        style={{
          fontSize: fontSize,
          fontFamily: familyName
        }}
      >
        {typeSomething}
      </p>
    </div>
  );
}

export default FontCard;
