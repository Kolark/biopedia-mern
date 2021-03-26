// import logo from './logo.svg';
import './App.css';

import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import BiopediaAbout from "./components/about.component";
import BiopediaAdd from "./components/add.component"
import BiopediaSearch from "./components/search.component";

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <div id="Page">
      </div>
      
      <Route path="/" exact component={BiopediaAbout} />
      <Route path="/add" component={BiopediaAdd}/>
      <div className="container" id="contents">
      <Route path="/search" component={BiopediaSearch}/>
      </div>
    </Router>
  );
}

export default App;
