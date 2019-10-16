import React, { useState } from "react";

function Searchbar() {
  const [searchFonts, setSearchFonts] = useState("");
  const [typeSomething, setTypeSomething] = useState("Hello World");
  const [fontSize, setFontSize] = useState("20px");

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="fa fa-search"></div>

        <input
          type="text"
          name="searchFonts"
          value={searchFonts}
          className="search-fonts"
          placeholder="Search fonts"
          onChange={event => setSearchFonts(event.target.value)}
        />

        <input
          type="text"
          name="typeSomething"
          value={typeSomething}
          className="type-something"
          placeholder="Type something"
          onChange={event => setTypeSomething(event.target.value)}
        />

        <select
          value={fontSize}
          name="fontSize"
          onChange={event => setFontSize(event.target.value)}
        >
          <option value="20px">20px</option>
          <option value="24px">24px</option>
          <option value="32px">32px</option>
          <option value="40px">40px</option>
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

      <h1>{searchFonts}</h1>
      <h1>{typeSomething}</h1>
      <h1>{fontSize}</h1>
    </div>
  );
}

export default Searchbar;
