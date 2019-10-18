import React from "react";

function FontCard({ family, searchFonts, typeSomething, fontSize }) {
  return (
    <div className="fontcard">
      <div className="font-title">
        <h4>{family}</h4>
        <div className="fa fa-plus-circle"></div>
      </div>
      <p
        style={{
          fontSize: fontSize,
          fontFace: {
            fontFamily: "Oswald",
            src:
              "http://fonts.gstatic.com/s/oswald/v26/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvgUFoZAaRliE.ttf"
          }
        }}
      >
        {typeSomething}
      </p>
    </div>
  );
}

export default FontCard;
