import React, { Component } from 'react';
import './style.css';
import { Icon } from 'react-fa';

class Details extends Component {
  render() {
    return (
      <div className="detail">
        <div className="detailTab">
          <ul>
            <li className="active"><a><Icon name="bell-o"/></a></li>
            <li><a><Icon name="bar-chart" /></a></li>
            <li><a><Icon name="sliders" /></a></li>
          </ul>
        </div>
        <div className="detailBody">
          {}
        </div>
      </div>
    )
  }
}

export default Details;
