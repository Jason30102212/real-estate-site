import React, { Component } from 'react';
import './style.css';
import { Icon } from 'react-fa';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      remember: false,
      email: '',
      password: ''
    };
  }

  signIn = () => {

  }

  updateEmail = () => {

  }

  updatePassword = () => {

  }



  render() {
    return (
      <div className='loginForm modal slimScroll fade'>
        <div className='modal-dialog modal-sm'>
          <div className='modal-content'>
            <h4 className='modal-title'>Sign In</h4>
          </div>
          <div className='modal-header'>
            <form role='loginform form' onSubmit={this.signIn}>
              <div className='form-group'>
                <div className='btn-group-justified'>
                  <div className='btn btn-lg btn-facebook'>
                    <Icon name='facebook' className='pull-left' />
                    <span>Sign In with Facebook</span>
                  </div>
                </div>
              </div>
              <div className='signOr'>OR</div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Email Address'
                  className='form-control'
                  onChange={this.updateEmail}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  placeholder='password'
                  className='form-control'
                  onChange={this.updatePassword}
                />
              </div>
              <div className='form-group'>
                <div className="btn-group-justified">
                  <button type='submit' className='btn btn-lg btn-green isThemeBtn btn-red'>
                    Sign In
                  </button>
                </div>
              </div>
              <p className='help-block'/>
                <span>Don't have an account?</span>
                <a
                  className='modal-su text-green isThemeText text-red'
                >
                  Sign Up
                </a>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;
