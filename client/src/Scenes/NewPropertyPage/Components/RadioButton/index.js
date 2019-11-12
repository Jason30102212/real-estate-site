import React, { Component } from 'react';
import './style.css';
import { Icon } from 'react-fa';

class RadioButton extends Component {
  render() {
    return (
      <div className="radio custom-radio">
        <label>
          <input type="radio" name="radio1" />
          <Icon name="circle" /> {this.props.children}
        </label>
      </div>
    )
  }
}

export default RadioButton;
