import React, { Component } from 'react';
import './style.css';
import { Icon } from 'react-fa';
import { Link } from 'react-router-dom';

import SelectComponent from 'Components/SelectComponent';


class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAdvance: false
    }
  }

  toggleAdvSearch = () => {
    this.setState({
      isAdvance: !this.state.isAdvance
    });
  }

  render() {
    const listBed = [
      'Bedrooms',
      '1',
      '2',
      '3',
      '4'
    ];
    const listBath = [
      'Bathrooms',
      '1',
      '2',
      '3',
      '4',
    ];
    return (
      <div className="search-panel">
        <form className="form-inline" role="form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="City"
            />
          </div>
          <div className={`form-group${this.state.isAdvance ? ' adv' : ' hidden-xs'}`}>
            <SelectComponent switchTop={true} listItem={listBed}>
              Bedroom
            </SelectComponent>
          </div>
          <div className={`form-group${this.state.isAdvance ? ' adv' : ' hidden-xs'}`}>
            <SelectComponent switchTop={true} listItem={listBath}>
              Bathroom
            </SelectComponent>
          </div>
          <div className={`form-group${this.state.isAdvance ? ' adv' : ' hidden-xs'}`}>
            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input
                className="form-control price"
                type="number"
                step="25000"
                placeholder="From"
              />
            </div>
          </div>
          <div className={`form-group${this.state.isAdvance ? ' adv' : ' hidden-xs'}`}>
            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input className="form-control price"
              type="number"
              step="25000"
              placeholder="To"/>
            </div>
          </div>
          <div className={`form-group${this.state.isAdvance ? ' adv' : ' hidden-xs'}`}>
            <div className="checkbox custom-checkbox">
              <label>
                <input type="checkbox" />
                <Icon name="check" />
                For Rent
              </label>
            </div>
          </div>
          <div className={`form-group${!this.state.isAdvance ? ' hidden-xs' : ''}`}>
            <div className="checkbox custom-checkbox">
            <label>
              <input type="checkbox" /><Icon name="check" />
              For Sale
            </label>
            </div>
          </div>
          <div className="form-group">
            <Link to="/search" className="btn isThemeBtn" style={{backgroundColor: '#61877d', color: "white"}}>
              Search
            </Link>
            <a
              href="#"
              className={`btn btn-o btn-white pull-right visible-xs${this.state.isAdvance ? ' advBtnActive' : ''}`}
              onClick={this.toggleAdvSearch}
            >
              Advanced Search
              <Icon name={`${this.state.isAdvance ? 'angle-down' : 'angle-up'}`} />
            </a>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
