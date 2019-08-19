import React, { Component } from 'react';
import './App.css';

import eagle from './images/eagle.png';
import Routes from './Routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={eagle} width="300" height="100" alt="EagleImage" />
        <Routes />
      </div>
    );
  }
}

export default App;
