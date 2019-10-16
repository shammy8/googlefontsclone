import React from "react";
import Navbar from "./Navbar.js";
import Searchbar from "./Searchbar.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
