import React, { Component } from 'react';
import'./style.css';
import { Link } from 'react-router-dom';


class Caption extends Component {
  render() {
    return (
      <div className="homeCaption">
        <div className="homeTitle">Homes and Investment Properties</div>
        <div className="homeSubtitle">
          HELPING YOU MOVE TO WHERE YOU NEED TO BE
        </div>
        <Link className="btn" style={{backgroundColor: "#1a252b ", color: 'white'}} to="/search">SEARCH LISTINGS</Link>
      </div>
    )
  }
}

export default Caption;
