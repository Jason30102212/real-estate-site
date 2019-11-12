import React, { Component } from 'react';
import './style.css';

class CheckBox extends Component {
  render() {
    return (
      <div className="checkbox custom-checkbox">
        <label>
          <input type="checkbox" value="on" />
          <span className="fa fa-check" />
          {this.props.children}
        </label>
      </div>
    );
  }
}

export default CheckBox;
