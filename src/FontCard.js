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
          fontFamily:
            "url(https://fonts.gstatic.com/s/shadowsintolight/v9/UqyNK9UOIntux_czAvDQx_ZcHqZXBNQzdcD5.woff2)"
        }}
      >
        {typeSomething}
      </p>
    </div>
  );
}

export default FontCard;
