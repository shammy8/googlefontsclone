import React from "react";

function FontTags({ font, clearSelectedFont }) {
  return (
    <div className="font-tag">
      <p>{font}</p>
      <div
        className="fa fa-minus-circle"
        onClick={() => clearSelectedFont(font)} // remove the font from the addedFont state when the minus button is clicked
      ></div>
    </div>
  );
}

export default FontTags;
