//import lodash
import _ from 'lodash';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//importing the 'SearchBar' component
import SearchBar from './components/search_bar';

//import VideoList component
import VideoList from './components/video_list';

//import VideoDetail component
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAueTmTezw8CiDshB7fFqRCeRzFCLaInLk';

// Create a new component. This should produce some HTML
class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      videos: [], // containing a list of videos
      selectedVideo: null // for the current video selection
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0] // Set selected video as the first video of the list
      }); 
    });
  }

  render() {

    //Search bar throttling using lodash
    // videoSearch returns a function that can be called every 300 milisecs
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/> {/* Passing the selected Video */}
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} // Updates the Apps' state with a new video
          videos={this.state.videos} /> {/* Passing videos from Parent Element(App) to Child Element (VideoList) */}
      </div>
    );
  }
  
}

//Take this component generated HTML & put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
