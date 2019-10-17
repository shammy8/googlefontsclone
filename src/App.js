import React, { useReducer } from "react";
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
      fontSize: "20px"
    }
  );

  const handleChange = event => {
    const { name, value } = event.target;
    setUserInput({ [name]: value });
  };

  return (
    <div>
      <Navbar />
      <Searchbar
        searchFonts={userInput.searchFonts}
        typeSomething={userInput.typeSomething}
        fontSize={userInput.fontSize}
        handleChange={handleChange}
      />
      <Main
        searchFonts={userInput.searchFonts}
        typeSomething={userInput.typeSomething}
        fontSize={userInput.fontSize}
      />
      <Footer />
    </div>
  );
}

export default App;
