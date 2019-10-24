import React from "react";
import FontTags from "./FontTags.js";

function BottomDrawer({
  addPlusSigns,
  isBottomDrawerOpen,
  bottomDrawerToggle,
  addedFonts,
  clearAllSelectedFonts,
  clearSelectedFont
}) {
  const addOrSigns = addedFonts => {
    return addedFonts.join("|");
  };
  return (
    <div
      className="bottom-drawer"
      style={
        isBottomDrawerOpen
          ? { transform: "translateY(0)" }
          : { transform: "translateY(271px)" }
      }
    >
      <div
        className="bottom-drawer-head"
        onClick={bottomDrawerToggle}
        style={
          addedFonts.length > 0 ? { cursor: "pointer" } : { cursor: "auto" }
        }
      >
        <p>{addedFonts.length} Families Selected</p>
      </div>

      <div className="bottom-drawer-main">
        <h2>Selected Families</h2>
        <div className="clear-all-fonts" onClick={clearAllSelectedFonts}>
          Clear All
        </div>

        <div className="font-tags">
          {addedFonts.map(tag => (
            <FontTags
              key={tag}
              addedFonts={tag}
              clearSelectedFont={clearSelectedFont}
            />
          ))}
        </div>

        <hr />

        <p style={{ margin: "10px 0px" }}>
          To embed your selected fonts into a webpage, copy this code into the
          &lt;head&gt; of your HTML document.
        </p>

        <p className="code">
          {`<link href="https://fonts.googleapis.com/css?family=${addOrSigns(
            addedFonts.map(font => addPlusSigns(font))
          )}&display=swap" rel="stylesheet">`}
        </p>
      </div>
    </div>
  );
}
export default BottomDrawer;
