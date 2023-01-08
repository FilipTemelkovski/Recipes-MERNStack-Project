import React from 'react';
import { CreateAccountDescription } from '../components/createAccountDescription/CreateAccountDescription';
import { CreateAccountForm } from '../components/createAccountForm/CreateAccountForm';

export const CreateAccountPage = () => {
  return (
    <div>
        <CreateAccountDescription/> 
        <div><h2>CREATE ACCOUNT</h2></div>
        <CreateAccountForm/>
    </div>
  )
}
