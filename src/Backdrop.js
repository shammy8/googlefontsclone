import React from "react";

function Backdrop({ sideDrawerToggle }) {
  return <div className="backdrop" onClick={sideDrawerToggle}></div>;
}

export default Backdrop;
