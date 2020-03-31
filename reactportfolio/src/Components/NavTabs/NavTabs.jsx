import React from "react";
import './NavTabs.css';
// import Container from '../Container/Container.jsx'
import { Link } from 'react-router-dom';
const NavTabs = () => {
    // use state expanded and setExpanded onClick
    // circle back
  return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link 
                            to="/" 
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/about"
                                ? "nav-link active"
                                : "nav-link"
                            }>
                            About
                        </Link>
                    </li>
                    &nbsp;|&nbsp;
                    <li className="nav-item">
                        <Link
                            to="/contact" 
                            className={
                                window.location.pathname === "/contact"
                                    ? "nav-link active"
                                    : "nav-link" 
                            }>
                            Contact
                        </Link>
                    </li>
                    &nbsp;|&nbsp;
                    <li className="nav-item">
                        <Link
                            to="/portfolio" 
                            className={
                                window.location.pathname === "/portfolio"
                                ? "nav-link active"
                                : "nav-link"
                            }>
                            Portfolio
                        </Link>
                    </li>
                </ul>
           {/* </div> */}
    </nav>
    </React.Fragment>
  )
}
export default NavTabs;
