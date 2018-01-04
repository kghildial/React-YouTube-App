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

    this.state = { videos: [] } // containing a list of videos

    YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos }); // ES6 shorthand for this.setState({ videos: videos })
    });

  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} /> {/* Passing videos from Parent Element(App) to Child Element (VideoList) */}
      </div>
    );
  }
  
}

//Take this component generated HTML & put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
