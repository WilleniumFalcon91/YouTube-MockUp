import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './searchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>WhoTube</h2>
        </div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
