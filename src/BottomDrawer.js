import React from "react";

function BottomDrawer({ isBottomDrawerOpen, bottomDrawerToggle }) {
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
        <p>0 Families Selected</p>
      </div>
      <div className="bottom-drawer-main"></div>
    </div>
  );
}
export default BottomDrawer;
