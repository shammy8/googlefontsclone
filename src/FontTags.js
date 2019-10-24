import React from "react";

function FontTags({ addedFonts, clearSelectedFont }) {
  return (
    <div className="font-tag">
      <p>{addedFonts}</p>
      <div
        className="fa fa-minus-circle"
        onClick={() => clearSelectedFont(addedFonts)}
      ></div>
    </div>
  );
}

export default FontTags;
