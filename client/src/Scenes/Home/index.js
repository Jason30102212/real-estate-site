import React, { Component } from 'react';
import './style.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import ListProperty from './Components/ListProperty';

class Home extends Component {

  render() {
    return (
      <div className="homePage">
        <div className="headerWrapper">
          <Header />
        </div>
        <div className="bodyWrapper">
          <ListProperty />
        </div>
        <div className="footerWrapper">
          <Footer />
        </div>
      </div>
    )
  }
}

export default Home;
