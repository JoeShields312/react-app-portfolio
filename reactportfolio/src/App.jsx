import React from 'react';
import NavTabs from "./Components/NavTabs/NavTabs.jsx";
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";



function App() {
  
    return (
      <BrowserRouter>
        <NavTabs />
       <React.Fragment>
         <Route exact path = "/" component={About}/>
         <Route exact path = "/portfolio" component={Portfolio}/>
         <Route exact path = "/contact" component={Contact}/>
       </React.Fragment>
       <Footer />
      </BrowserRouter>
    )
  }



export default App;
