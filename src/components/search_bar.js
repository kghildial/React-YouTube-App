//importing react ( A MUST!!! )
import React, { Component } from 'react';

//ES6 class (like a JS object)
class SearchBar extends Component {
  render() {
    return <input onChange={ (event) => console.log(event.target.value) } />;
  }

}
//statement for exporting code
export default SearchBar;