import React, { useState, useReducer } from "react";
import Navbar from "./Navbar.js";
import Searchbar from "./Searchbar.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      searchFonts: "",
      typeSomething: "",
      fontSize: "20px",
      isList: false
    }
  );

  const handleChange = event => {
    const { name, value } = event.target;
    setUserInput({ [name]: value });
  };

  const listGridToggle = () => {
    setUserInput({ isList: !userInput.isList });
  };

  const reset = () => {
    setUserInput({ searchFonts: "" });
    setUserInput({ typeSomething: "" });
    setUserInput({ fontSize: "20px" });
    setUserInput({ isList: false });
  };

  return (
    <div>
      <Navbar />

      <Searchbar
        searchFonts={userInput.searchFonts}
        typeSomething={userInput.typeSomething}
        fontSize={userInput.fontSize}
        handleChange={handleChange}
        listGridToggle={listGridToggle}
        isList={userInput.isList}
        reset={reset}
      />

      <Main
        searchFonts={userInput.searchFonts}
        typeSomething={userInput.typeSomething}
        fontSize={userInput.fontSize}
        isList={userInput.isList}
      />

      <div
        className="to-top"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <div className="fa fa-long-arrow-up"></div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
