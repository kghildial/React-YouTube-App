//importing react ( A MUST!!! )
import React, { Component } from 'react';

//ES6 class (like a JS object)
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return <input onChange={ (event) => this.setState({ term: event.target.value }) } />;
  }

}
//statement for exporting code 
export default SearchBar;