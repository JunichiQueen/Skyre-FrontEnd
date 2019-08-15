import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavTab from './Skyre/Navtab.js';
import Login from './Login.js';
import eagle from './images/eagle.png';

class App extends Component{
  render(){
      return (
        <div className="App">
          <img src={eagle} width="300" height="100"/>
          <Router>
            <Route exact path="/login" render={(props) => <Login />}/>
            <Route exact path="/" render={(props) => <NavTab/>}/>
          </Router>
        </div>
  );
  }
}

export default App;
