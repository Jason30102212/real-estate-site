import React, { Component } from 'react';
import './style.css';
import { Icon } from 'react-fa';
import { Link } from 'react-router-dom';

import UserMenu from '../../../UserMenu';
import NotifyMenu from './Components/NotifyMenu';
import SearchForm from './Components/SearchForm';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="dashboardHeader">
        <div className="logo">
          <Link to="/">
            <Icon className="fa fa-home marker" name="home" />
            <span className="logoText">Real Estate</span>
          </Link>
        </div>
        <a href="#" className="navHandler" onClick={(e) => this.props.clickToggle()}><Icon name="bars" /></a>
        <SearchForm />
        <div className="userMenuWrapper">
          <UserMenu />
        </div>
      </div>
    )
  }
}

export default Header;
