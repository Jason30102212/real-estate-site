import React, { Component } from 'react';
import './style.css';
import Header from './Components/Header';
import LeftSide from './Components/LeftSide';


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      isExpand: false
    };
  }

  toggleLeftSide = () => {
    this.setState({
      isExpand: !this.state.isExpand
    });
  }

  clickOutsideLeftSide = () => {
    if (this.state.isExpand) {
      this.toggleLeftSide();
    }
  }

  render() {
    return (
      <div className="dashboard">
        <div className="headerWrapper" onClick={this.clickOutsideLeftSide}>
          <Header clickToggle={this.toggleLeftSide} />
        </div>
        <div className="bodyWrapper">
          <LeftSide isExpired={this.state.isExpired} />
          <div
            className={'contentWrapper' + (this.state.isExpanded ? ' smallSize' : '')}
            onClick={this.clickOutsideLeftSide}
          >
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
