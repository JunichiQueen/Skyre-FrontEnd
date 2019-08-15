import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResultList from './Skyre/ResultList';
import Individual from './Skyre/Individual';
import NavTab from './Skyre/Navtab.js';
import eagle from './images/eagle.png';

class App extends Component{
  render(){
      return (
        <div className="App">
          <img src={eagle} width="300" height="100"/>
          <NavTab />
          <ResultList/>
        </div>
  );
  }
}

export default App;
