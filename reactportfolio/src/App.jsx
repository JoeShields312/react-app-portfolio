import React from 'react';
import NavTabs from "./Components/NavTabs/NavTabs";
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";



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
