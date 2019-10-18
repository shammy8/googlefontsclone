import React from "react";
import { Helmet } from "react-helmet";

function FontCard({ family, typeSomething, fontSize }) {
  //Add plus signs between words in the name of the font, to be used to retrive the fonts using the url
  const addPlusSigns = family => {
    if (family.indexOf(" ") === -1) {
      return family;
    } else {
      return family.split(" ").join("+");
    }
  };

  return (
    <div className="fontcard">
      <div className="font-title">
        <Helmet>
          <link
            href={`https://fonts.googleapis.com/css?family=${addPlusSigns(
              family
            )}`}
            rel="stylesheet"
          ></link>
        </Helmet>
        <h4>{family}</h4>
        <div className="fa fa-plus-circle"></div>
      </div>
      <p
        style={{
          fontSize: fontSize,
          fontFamily: family
        }}
      >
        {typeSomething}
      </p>
    </div>
  );
}

export default FontCard;
