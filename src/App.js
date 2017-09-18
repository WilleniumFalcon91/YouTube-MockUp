import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './searchBar';
import VideoList from './videoList';
import VideoDetail from './videoDetail';

const API_KEY = 'AIzaSyCo_LE6xezdYhgVj9tu5nlPxVpElcU4dgI';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        videos: [],
        selectedVideo: null, 
      };

      YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0],
        });
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
        <div className="feature-video">
          <VideoDetail video={this.state.selectedVideo}/>
        </div>
        <div className="video-list">
          <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} 
            />
        </div>
      </div>
    );
  }
}

export default App;
