import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import YTSearch from 'youtube-api-search';

import SearchBar from './searchBar';

const API_KEY = 'AIzaSyCo_LE6xezdYhgVj9tu5nlPxVpElcU4dgI';

YTSearch({ key: API_KEY, searchTerm: 'surfboards'}, function(data) {
    console.log(data);
});


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
