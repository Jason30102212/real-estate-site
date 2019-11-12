import React, { Component } from 'react';
import './style.css';
import { Icon } from 'react-fa';
import AgentInfo from '../AgentInfo';

class SearchAgentForm extends Component {
  agentList = [
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-3.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA'
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-4.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA'
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-2.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA'
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-1.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA'
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-2.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA'
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-1.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA'
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-2.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA'
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-1.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA'
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-2.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA'
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-1.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA'
    }
  ];

  constructor() {
    super();
    this.state = {
      result: 'agent'
    };
  }

  changeResultTab = (tab: 'agencies' | 'agent') => {
    if (tab !== this.state.result) {
      this.setState({
        resultTab: tab
      });
    }
  }

  resultAgencies = () => {
    return (
      <h2>Agencies</h2>
    );
  }

  resultAgent = () => {
    return (
      <ul className="agentsResult">
        {this.agentList.map((item, index) => {
          return (
            <li key={index}>
              <AgentInfo avatar={item.avatar} name={item.name} title={item.title} address={item.address} />
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <div className="dashboardTitle">
          <h3>Find Agent</h3>
          <h5>We'd love to find out more about you. It'll help us make
sure our website and apps tick the right boxes.</h5>
        </div>
        <div className="searchAgentForm">
          <div className="input-group searchForm">
            <input type="text" name="" id="" className="form-control" />
            <span className="input-group-btn"><button className='btn btn-green'><Icon name='search' /></button></span>
          </div>
          <div className='resultTab'>
            <ul>
              <li
                className={this.state.resultTab === 'agents' ? 'active' : ''}
                onClick={(e) => this.changeResultTab('agent')}
              >
                <a><Icon name='map-o' />Agent</a>
              </li>
              <li
                className={this.state.resultTab === 'agencies' ? 'active' : ''}
                onClick={(e) => this.changeResultTab('agencies')}
              >
                <a><Icon name='th-list' />Agencies</a>
              </li>
            </ul>
          </div>
          <div className="resultBody">
            <h3>Result:</h3>
            {this.state.resultTab === 'agents' ? this.resultAgent() : this.resultAgencies()}
          </div>
        </div>
      </div>
    )
  }
}

export default SearchAgentForm;
