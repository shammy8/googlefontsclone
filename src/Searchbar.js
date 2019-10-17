import React, { useReducer } from "react";

function Searchbar() {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      searchFonts: "",
      typeSomething: "",
      fontSize: "20px"
    }
  );

  const handleChange = event => {
    const { name, value } = event.target;
    setUserInput({ [name]: value });
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="fa fa-search"></div>

        <input
          type="text"
          name="searchFonts"
          value={userInput.searchFonts}
          className="search-fonts"
          placeholder="Search fonts"
          onChange={handleChange}
        />

        <input
          type="text"
          name="typeSomething"
          value={userInput.typeSomething}
          className="type-something"
          placeholder="Type something"
          onChange={handleChange}
        />

        <select
          value={userInput.fontSize}
          name="fontSize"
          onChange={handleChange}
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

      <h1>{userInput.searchFonts}</h1>
      <h1>{userInput.typeSomething}</h1>
      <h1>{userInput.fontSize}</h1>
    </div>
  );
}

export default Searchbar;
