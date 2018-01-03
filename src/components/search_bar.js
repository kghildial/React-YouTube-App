//importing react ( A MUST!!! )
import React, { Component } from 'react';

//ES6 class (like a JS object)
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input onChange={ (event) => this.setState({ term: event.target.value }) } />
        Value of the input: { this.state.term }
      </div>
    );
  }

}
//statement for exporting code 
export default SearchBar;