import React from 'react';
import "../../../src/App.css"

const SideBar = () => {
    return (  
        <div className="icon-bar rounded mx-auto">
        <a href="tel:219-378-8250" target="__blank" className="cell"><i className="fas fa-mobile-alt"></i></a>
        <a href="mailto:shields.john.joseph@gmail.com" target="__blank" className="google"><i className="fa fa-google"></i></a>
        <a href="https://github.com/JShields30" target="__blank"className="github"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/joe-shields-8496a212a/" target="__blank" className="linkedin"><i className="fa fa-linkedin"></i></a>
        </div>
    
    );
}

export default SideBar;