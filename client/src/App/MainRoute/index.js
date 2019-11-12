import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Bootstrap/bootstrap.min.css';
import './style.css';

import Home from '../../Scenes/Home';
import SearchPage from '../../Scenes/SearchPage'
import WalletPage from '../../Scenes/WalletPage';
import Advice from '../../Scenes/Advice';
import NewPropertyPage from '../../Scenes/NewPropertyPage';
import MyHousePage from '../../Scenes/MyHousePage';
import AgentPage from '../../Scenes/AgentPage';


class MainRoute extends Component {

  render() {
    return (
      <Router>
        <div className="globalContainer">
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/search/:action?" component={SearchPage} />
          <Route exact={true} path="/wallet/:action" component={WalletPage} />
          <Route exact={true} path="/advice/:type" component={Advice} />
          <Route exact={true} path="/newproperty/:action" component={NewPropertyPage} />
          <Route exact={true} path="/property/:id?" component={MyHousePage} />
          <Route exact={true} path="/agent/:action" component={AgentPage} />
        </div>
      </Router>
    )
  }
}

export default MainRoute;
