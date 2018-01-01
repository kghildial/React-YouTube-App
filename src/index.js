import React from 'react';
import ReactDOM from 'react-dom';

//importing the 'SearchBar' component
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAueTmTezw8CiDshB7fFqRCeRzFCLaInLk';

// Create a new component. This should produce some HTML
const App = function() {
  return <div>Hi!</div>;
}

//Take this component generated HTML & put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
