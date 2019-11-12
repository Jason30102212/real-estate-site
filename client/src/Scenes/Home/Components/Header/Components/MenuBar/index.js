import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-fa';
import RLForm from '../../../../../../Components/RegisterLoginForm';


import './style.css';

class MenuBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menuBar">
        <a href="/">
          <div className="homeLogo osLight">
            <Icon name="chess-rook" size="2x" />
            	<i className="fas fa-chess-rook"></i>
            <span>Real-Estate</span>
          </div>
        </a>
        <a
          href="#"
          className={'homeNavHandler visible-xs' + (true ? ' active' : '')}
          onClick={this.toggleHandler}
        >
          <Icon name="bar" />
        </a>
        <div className={'homeNav' + (true ? ' active' : '')}>
          <ul>
            <li className="moreOption">
              <Link to="/search?type=sale">Buy</Link>
            </li>
            <li className="moreOption">
              <Link to="/search?type=rent">Rent</Link>
            </li>
            <li className="moreOption">
              <Link to="/agent/search">Renovation</Link>
            </li>
            <li className="moreOption">
              <Link to="/agent/search">Commercial</Link>
            </li>
            <li className="moreOption">
              <Link to="/projects">Project</Link>
            </li>
            <li className="moreOption">
              <Link to="/agent/search">Find Agent</Link>
            </li>
            <li>
              <Link to="/newproperty/sell"><div className="btn" style={{backgroundColor: '#61877d'}}>
                List a Property
              </div></Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MenuBar;
