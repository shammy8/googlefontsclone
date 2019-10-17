import React from "react";

function FontCard({ family, text }) {
  return (
    <div className="fontcard">
      <div className="font-title">
        <h4>{family}</h4>
        <div className="fa fa-plus-circle"></div>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default FontCard;
