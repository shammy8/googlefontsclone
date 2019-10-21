import React from "react";

function Searchbar({
  searchFonts,
  typeSomething,
  fontSize,
  handleChange,
  toggleTheme,
  listGridToggle,
  isList,
  reset
}) {
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
          onChange={handleChange}
        />

        <input
          type="text"
          name="typeSomething"
          value={typeSomething}
          className="type-something"
          placeholder="Type something"
          onChange={handleChange}
        />

        <select value={fontSize} name="fontSize" onChange={handleChange}>
          <option value="20px">20px</option>
          <option value="24px">24px</option>
          <option value="32px">32px</option>
          <option value="40px">40px</option>
          <option value="64px">64px</option>
          <option value="90px">90px</option>
        </select>

        <div className="background-chooser">
          <div className="fa fa-circle" onClick={toggleTheme}></div>
        </div>

        <div className="list-grid-chooser">
          <div
            className="fa fa-list"
            onClick={listGridToggle}
            style={isList ? { display: "none" } : { display: "initial" }}
          ></div>
          <div
            className="fa fa-th"
            onClick={listGridToggle}
            style={isList ? { display: "initial" } : { display: "none" }}
          ></div>
        </div>

        <div className="fa fa-repeat" onClick={reset}></div>
      </div>
    </div>
  );
}

export default Searchbar;
