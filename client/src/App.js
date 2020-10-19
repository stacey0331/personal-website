import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import $ from "jquery";

// Pages
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import NotFoundPage from './pages/NotFoundPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactMePage from './pages/ContactMePage';
import ProjectPage from './pages/ProjectPage';

// Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import './App.css';

function App() {
  $(window).on('load', function() {
    $('#loading').hide();
  });
  
  return (
    <Router>
      <div id="loading">
        <div id="loadingText">Loading ...</div>
      </div>
      <NavBar />
      <div id="pageTop" />
      <br /><br /><br /><br />
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/about-me" component={AboutMePage} />
        <Route path="/contact-me" component={ContactMePage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/project/:name" component={ProjectPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
