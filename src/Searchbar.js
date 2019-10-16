import React from "react";

function Searchbar() {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="fa fa-search"></div>
        <input
          className="search-fonts"
          type="text"
          placeholder="Search fonts"
        />
        <input className="type-something" placeholder=" Type something" />

        <select name="font-size">
          {/* <option value="">--select font size--</option> */}
          <option value="20px"> 20px</option>
          <option value="24px"> 24px</option>
          <option value="32px"> 32px</option>
          <option value="40px"> 40px</option>
        </select>

        <div className="background-chooser">
          <div className="fa fa-circle"></div>
          <div className="fa fa-circle-o"></div>
        </div>

        <div className="list-grid-chooser">
          <div className="fa fa-list"></div>
        </div>

        <div className="fa fa-repeat"></div>
      </div>
    </div>
  );
}

export default Searchbar;
