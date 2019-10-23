import React from "react";

function SideDrawer({ isSideDrawerOpen }) {
  let classes = "side-drawer";
  if (isSideDrawerOpen) {
    classes = "side-drawer open";
  }
  return (
    <div className={classes}>
      <div className="google-fonts-title">
        <div className="google-logo"></div>
        <h1>&nbsp;Fonts</h1>
      </div>
      <hr />
      <ul>
        <li>
          <a
            style={{ color: " rgb(255, 86, 86)" }}
            href={"https://fonts.google.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Catalog
          </a>
        </li>
        <li>
          <a
            href={"https://fonts.google.com/featured"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Featured
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
            Articles
          </a>
        </li>
        <li>
          <a
            href={"https://fonts.google.com/about"}
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
        </li>
      </ul>
    </div>
  );
}
export default SideDrawer;