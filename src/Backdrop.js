import React from "react";

function Backdrop({ removeDrawers }) {
  return <div className="backdrop" onClick={removeDrawers}></div>;
}

export default Backdrop;
