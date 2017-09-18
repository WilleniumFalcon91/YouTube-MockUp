import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './searchBar';
import VideoList from './videoList';

const API_KEY = 'AIzaSyCo_LE6xezdYhgVj9tu5nlPxVpElcU4dgI';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = { videos: [] };

      YTSearch({ key: API_KEY, searchTerm: 'surfboards'}, (videos) => {
        this.setState({videos});
      });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>WhoTube</h2>
        </div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
