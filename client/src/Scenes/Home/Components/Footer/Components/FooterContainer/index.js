import React, { Component } from 'react';
import './style.css';

import ListComp from './Components/ListComp';
import GetInTouch from './Components/GetInTouch';
import Subscribe from './Components/Subscribe';
class FooterContainer extends Component {
  listCompany =  [
  'About',
  'Jobs',
  'Press',
  'Blog',
  'Help',
  'Policies',
  'Terms & Privacy'
  ];
  listDiscover = [
    'Become a Member',
    'Properties List',
    'Sign in',
    'Widgets',
    'Components',
    'Tables',
    'Lists'
  ];
  render() {
    return (
      <div className="footerContainer">
        <div className="row">
          <ListComp list={this.listCompany}>Company</ListComp>
          <ListComp list={this.listDiscover}>Discover</ListComp>
          <GetInTouch>Get in Touch</GetInTouch>
          <Subscribe>Subscrbe to Our Newsletter</Subscribe>
        </div>
        <div className="footerCopyRight">
          FamiCare Company<br/> © Copy right FamiCare technology Co
        </div>
      </div>
    )
  }
}

export default FooterContainer;
