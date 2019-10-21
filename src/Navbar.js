import React from "react";

function Navbar() {
  return (
    <header>
      <div className="google-fonts-title">
        <div className="google-logo"></div>
        <h1>&nbsp;Fonts</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a
              style={{ color: " rgb(255, 86, 86)" }}
              href={"https://fonts.google.com"}
            >
              CATALOG
            </a>
          </li>
          <li>
            <a href={"https://fonts.google.com/featured"} target="blank">
              FEATURED
            </a>
          </li>
          <li>
            <a
              href={
                "https://design.google/library/google-fonts/?utm_source=Google&utm_medium=Fonts&utm_campaign=Article%20Tab"
              }
              target="blank"
            >
              ARTICLES
            </a>
          </li>
          <li>
            <a href={"https://fonts.google.com/about"} target="blank">
              ABOUT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
