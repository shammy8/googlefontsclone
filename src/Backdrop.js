import React from "react";

function Backdrop({ removeDrawers }) {
  return <div className="backdrop" onClick={removeDrawers}></div>; // backdrop appears when a drawers open, it darkens everything except the drawers, closes all the drawers when backdrop is clicked
}

export default Backdrop;
