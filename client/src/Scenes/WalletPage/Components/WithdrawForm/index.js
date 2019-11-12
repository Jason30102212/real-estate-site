import React, { Component } from 'react';
import './style.css';
import SelectComponent from '../../../../Components/SelectComponent';

class WithdrawForm extends Component {

  type = [
    'Bitcoin',
    'USD'
  ]

  render() {
    return (
      <div>
        <div className="dashboardTitle">
          <h3>Withdraw Form</h3>
        </div>
        <div className="depositForm panel panel-default">
          <form>
            <div className="input-group form-group">
              <span className="input-group-addon">Amount</span>
              <input type="text" className="form-control" placeholder="Amount" />
            </div>
            <div className="input-group form-group">
              <span className="input-group-addon">Type</span>
              <SelectComponent listItem={this.types} />
            </div>
            <div className="input-group form-group">
              <span className="input-group-addon">Methods</span>
              <SelectComponent listItem={this.methods} />
            </div>
            <div className="button-group form-group">
              {
                //<div className="btn btn-white" onClick={(e) => history.back()}>{'<< Back'}</div>
              }
              <button className="btn btn-green">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default WithdrawForm;
