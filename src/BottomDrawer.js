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
  // join each font with the | symbol, used to create the link tag
  const addOrSigns = addedFonts => {
    return addedFonts.join("|");
  };

  return (
    <div
      className="bottom-drawer"
      style={
        isBottomDrawerOpen // slide the bottom drawer up and down
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
        <p>
          {addedFonts.length} {addedFonts.length === 1 ? "Family" : "Families"}{" "}
          Selected
        </p>
      </div>

      <div className="bottom-drawer-main">
        <h2>Selected Families</h2>
        <div className="clear-all-fonts" onClick={clearAllSelectedFonts}>
          Clear All
        </div>

        <div className="font-tags">
          {" "}
          {/* For each font selected by user create a font tag to be display in the bottom drawer */}
          {addedFonts.map(tag => (
            <FontTags
              key={tag}
              font={tag}
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
          {" "}
          {/* create the link tag */}
          {`<link href="https://fonts.googleapis.com/css?family=${addOrSigns(
            addedFonts.map(font => addPlusSigns(font))
          )}&display=swap" rel="stylesheet">`}
        </p>
      </div>
    </div>
  );
}
export default BottomDrawer;
