import React from "react";

function Navbar({ sideDrawerToggle }) {
  return (
    <header>
      <div className="google-fonts-title">
        <div className="google-logo"></div>
        <h1>&nbsp;Fonts</h1>
      </div>
      <nav>
        <div className="fa fa-navicon" onClick={sideDrawerToggle}></div>
        <ul>
          <li>
            <a
              style={{ color: " rgb(255, 86, 86)" }}
              href={"https://fonts.google.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              CATALOG
            </a>
          </li>
          <li>
            <a
              href={"https://fonts.google.com/featured"}
              target="_blank"
              rel="noopener noreferrer"
            >
              FEATURED
            </a>
          </li>
          <li>
            <a
              href={
                "https://design.google/library/google-fonts/?utm_source=Google&utm_medium=Fonts&utm_campaign=Article%20Tab"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              ARTICLES
            </a>
          </li>
          <li>
            <a
              href={"https://fonts.google.com/about"}
              target="_blank"
              rel="noopener noreferrer"
            >
              ABOUT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
