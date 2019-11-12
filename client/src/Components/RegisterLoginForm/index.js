import React, { Component } from 'react';
import './style.css';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';


class RLForm extends Component {

  render() {
    return (
      <div
        className='RLForm'
      >
        <RegisterForm active={true} openLoginForm={true}/>
        <LoginForm active={false} openRegisterForm={false}/>
        <div className={'modal-backdrop fade'}/>
      </div>
    )
  }
}

export default RLForm;
