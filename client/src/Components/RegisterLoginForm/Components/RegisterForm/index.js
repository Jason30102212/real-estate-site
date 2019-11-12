import React, {Component} from 'react';
import './style.css';
import { Icon } from 'react-fa';


class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      verifyCode: '',
      name: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      username: '',
      isActiveForm: false,
      isLoading: false
    }
  }

  activeForm = () => {
    return (
      <form role="form" onSubmit={this.submitActive}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Verify Code"
            className="form-control"
            value={this.state.verifyCode}
            onChange={(e) => { this.changeFormData('verifyCode', e.currentTarget.value); }}
          />
        </div>
        <div className="form-group">
          <div className="btn-group-justified">
            <button type="submit" className="btn btn-lg btn-green isThemeBtn">Verify</button>
          </div>
        </div>
      </form>
    );
  }

  registerForm = () => {
    return (
      <form role='form' onSubmit=''>
        <div className='form-group'>
          <div className='btn-group-justified'>
            <a href='explore.html' className='btn btn-lg'>
              <Icon name='facebook' className='pul-left' />
              <span>Sign In with Facebook</span>
            </a>
          </div>
        </div>
        <div className='form-group'>
          <div className='btn-group-justified'>
            <a href='expore.html' className='btn btn-lg btn-google'>
              <Icon name='google' className='pull-left' />
              <span>Sign In with Google</span>
            </a>
          </div>
        </div>
        <div className='signOr'>OR</div>
        <div className="form-group">
        <input
          type="text"
          placeholder="First Name"
          className="form-control"
          value={this.state.name}
          onChange={(e) => { this.changeFormData('name', e.currentTarget.value); }}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Last Name"
          className="form-control"
          value={this.state.lastName}
          onChange={(e) => { this.changeFormData('lastName', e.currentTarget.value); }}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email Address"
          className="form-control"
          value={this.state.email}
          onChange={(e) => { this.changeFormData('email', e.currentTarget.value); }}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="User Name"
          className="form-control"
          value={this.state.username}
          onChange={(e) => { this.changeFormData('username', e.currentTarget.value); }}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          className="form-control"
          value={this.state.password}
          onChange={(e) => { this.changeFormData('password', e.currentTarget.value); }}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Confirm Password"
          className="form-control"
          value={this.state.confirmPassword}
          onChange={(e) => { this.changeFormData('confirmPassword', e.currentTarget.value); }}
        />
      </div>
      <div className="form-group">
        <div className="btn-group-justified">
          <button type="submit" className="btn btn-lg btn-green isThemeBtn">Sign Up</button>
        </div>
      </div>
      <p className="help-block">
        <span>Already a Reales member? </span>
        <a
          href="#"
          className="modal-su text-green isThemeText text-red"
          onClick={this.props.openLoginForm}
        >
          Sign In
        </a>
      </p>
      </form>
    )
  }

  render() {
    return(
      <div className='registerForm slimScroll modal fade'>
        <div className='modal-dialog modal-sm'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>
                Modal Title
              </h4>
            </div>
            <div className='modal-body'>
              {this.state.isActiveForm ? this.activeForm() : this.registerForm()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterForm;
