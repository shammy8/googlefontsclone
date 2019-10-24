import React from "react";
import FontTags from "./FontTags.js";

function BottomDrawer({
  isBottomDrawerOpen,
  bottomDrawerToggle,
  addedFonts,
  clearAllSelectedFonts,
  clearSelectedFont
}) {
  return (
    <div
      className="bottom-drawer"
      style={
        isBottomDrawerOpen
          ? { transform: "translateY(0)" }
          : { transform: "translateY(231px)" }
      }
    >
      <div className="bottom-drawer-head" onClick={bottomDrawerToggle}>
        <p>{addedFonts.length} Families Selected</p>
      </div>
      <div className="bottom-drawer-main">
        <h3>Selected Families</h3>
        <div className="clear-all-fonts" onClick={clearAllSelectedFonts}>
          Clear All Selection
        </div>
        {addedFonts.map(tag => (
          <FontTags
            key={tag}
            addedFonts={tag}
            clearSelectedFont={clearSelectedFont}
          />
        ))}
      </div>
    </div>
  );
}
export default BottomDrawer;
