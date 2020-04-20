import React from 'react';
import "../../../src/App.css"

const SideBar = () => {

    return (  
        <div className="icon-bar rounded mx-auto">
        <a href="tel:219-378-8250" target="__blank" className="cell" data-toggle="tooltip" data-placement="top" title="Cell: 219-378-8250"><i className="fas fa-mobile-alt"></i></a>
        <a href="mailto:shields.john.joseph@gmail.com" target="__blank" className="google" data-toggle="tooltip" data-placement="top" title="Email: shields.john.joseph@gmail.com"><i className="fa fa-google"></i></a>
        <a href="https://github.com/JShields30" target="__blank"className="github"><i className="fab fa-github" data-toggle="tooltip" data-placement="top" title="GitHub: JShields30"></i></a>
        <a href="https://www.linkedin.com/in/joe-shields-8496a212a/" target="__blank" className="linkedin"><i className="fa fa-linkedin" data-toggle="tooltip" data-placement="top" title="LinkedIn: https://www.linkedin.com/in/jshields90/"></i></a>
        <a href="https://drive.google.com/open?id=14DaVP5KnxZToKtxTNYPjWdyoMv93kDg_" target="__blank" className="resume" data-toggle="tooltip" data-placement="top" title="Resume"><i className="far fa-file"></i></a>
        </div>
    
    );
}


export default SideBar;