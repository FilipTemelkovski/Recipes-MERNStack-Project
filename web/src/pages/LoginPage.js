import React from 'react';
import { LoginForm } from '../components/loginForm/LoginForm';
import { LoginDescription } from '../components/loginDescription/LoginDescription';

export const LoginPage = () => {
  return (
    <div>
      <div><h1>Log In</h1></div>
      <LoginDescription/>
      <LoginForm/>
    </div>
  )
}
