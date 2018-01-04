import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//importing the 'SearchBar' component
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAueTmTezw8CiDshB7fFqRCeRzFCLaInLk';

YTSearch({ key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

// Create a new component. This should produce some HTML
const App = function() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Take this component generated HTML & put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
