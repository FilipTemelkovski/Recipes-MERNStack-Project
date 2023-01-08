import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export const CreateAccountForm = () => {

    const { getCreateUserFormValues, handleCreateUserSubmit } = useContext(UserContext);
    
    return (
        <form>
            <div>
                <label>First Name</label>
                <input
                    type="text"
                    placeholder="John"
                    name='firstName'
                    onChange={getCreateUserFormValues}
                    required
                />
            </div>
            <div>
                <label>Last Name</label>
                <input
                    type="text"
                    placeholder="Smith"
                    name='lastName'
                    onChange={getCreateUserFormValues}
                    required
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    placeholder="john@smith.com"
                    name='email'
                    onChange={getCreateUserFormValues}
                    required
                />
            </div>
            <div>
                <label>Birthday</label>
                <input
                    type="date"
                    name='dateOfBirth'
                    onChange={getCreateUserFormValues}
                    required
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    placeholder="******"
                    name='password'
                    onChange={getCreateUserFormValues}
                    required
                />
            </div>
            <div>
                <label>Repeat Password</label>
                <input
                    type="password"
                    placeholder="******"
                    name='repeatPassword'
                    onChange={getCreateUserFormValues}
                    required
                />
            </div>
            <div>
                <button onClick={handleCreateUserSubmit}>CREATE ACCOUNT</button>
            </div>
        </form>
    )
}
