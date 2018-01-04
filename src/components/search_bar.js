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
      <div className="search-bar">
        <input
          value={ this.state.term }
          onChange={ (event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }


  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
//statement for exporting code 
export default SearchBar;