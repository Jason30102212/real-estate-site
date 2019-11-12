import React, { Component } from 'react';
import './style.css';
import { ChildComponentProps } from 'google-map-react';

class MiniHouse extends Component {
  render() {
    return (
      <div className={'markerWrapper' + (this.props.$hover ? ' hover' : '')}>
        <div className="markerArrow" />
        <div className="markerIcon" />
      </div>
    )
  }
}

export default MiniHouse;
