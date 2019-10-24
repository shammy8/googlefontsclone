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
          onClick={() => addFont(familyName)}
        ></div>
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
