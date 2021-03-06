import React, { Component } from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import Dashboard from '../../Components/DashboardLayout';
import SingleHouse from '../../Components/SingleHouse';

const houseData = {
  name: 'Modern Residence in New York',
  address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/1-1.png'
};

class MyHousePage extends Component {
  render() {
    return (
      <div className="myhousePage">
        <Dashboard>
          <div className="dashboardTitle">
            <h3>Property ({this.props.match.params.id})</h3>
          </div>
          <div className="myHouseWrapper">
            <SingleHouse data={houseData} />
          </div>
        </Dashboard>
      </div>
    )
  }
}

export default MyHousePage;
