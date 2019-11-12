import React, {Component} from 'react';
import './style.css';

import {Icon} from 'react-fa';

class SearchForm extends Component {
  render() {
    return (
      <div className="search">
        <Icon className="search" />
        <input type="text" placeholder="Search for houses, apartments..." />
      </div>
    )
  }
}

export default SearchForm;
