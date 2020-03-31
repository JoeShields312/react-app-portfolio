import React from "react";

function NavTabs() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
        About
        </a>
        <a className="navbar-brand" href="/portfolio">
        Portfolio
        </a>
        <a className="navbar-brand" href="/contact">
        Contact
        </a>
      </nav>
  );
}

export default NavTabs;