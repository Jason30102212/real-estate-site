import React, { Component } from 'react';
import './style.css';

import SlideShow from './Components/SlideShow';
import MenuBar from './Components/MenuBar';
import Caption from './Components/Caption';
import SearchBar from './Components/SearchBar';

class Header extends Component {

  render(){
    return(
      <div className="header">
        <div className="slideShowBarWrapper">
          <SlideShow />
        </div>
        <div className="menuBarWrapper">
          <MenuBar />
        </div>
        <Caption />
        <div className="selectBarWrapper">
          <SearchBar />
        </div>
      </div>
    )
  }
}

export default Header;
