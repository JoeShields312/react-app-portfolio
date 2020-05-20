import React from "react";
import './NavTabs.css';
// import Container from '../Container/Container.jsx'
import { Link } from 'react-router-dom';
const style = {
    textShadow: "0px 5px 13px #61dbfb,1px 0px 30px #000000,4px -3px 22px #61dbfb",
  }
const NavTabs = () => {
    // use state expanded and setExpanded onClick
    // circle back
  return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark" style={style}>
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
                    {/* <li className="nav-item">
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
                    &nbsp;|&nbsp; */}
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
