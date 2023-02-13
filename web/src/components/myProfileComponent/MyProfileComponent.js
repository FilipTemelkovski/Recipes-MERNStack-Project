import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import './MyProfileComponent.style.css';

export const MyProfile = () => {

    const { getEditedUserFormValues, handleUpdateUserSubmit, currentlyLoggedInUser, setCurrentLoggedInUser } = useContext(UserContext);
  
    const user = currentlyLoggedInUser();  

    return (
        <div className='MyProfileContainer'>
            <div className='Title'></div>
            <div className='Context'>
                <div className='Avatar'>
                    <div>slika</div>
                    <button>Change Avatar</button>
                </div>
                <div className='CreateProfile'>
                    <form>
                        <label>First Name</label>
                        <input
                            type="text"
                            name='firstName'
                            placeholder={user.firstName}
                            onChange={getEditedUserFormValues}
                        />
                        <label>Last Name</label>
                        <input
                            placeholder={user.lastName}
                            type="text"
                            name='lastName'
                            onChange={getEditedUserFormValues}
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder={user.email}
                            name='email'
                            onChange={getEditedUserFormValues}
                        />
                        <label>Birthday</label>
                        <input
                            type="text"
                            placeholder={user.dateOfBirth}
                            name='dateOfBirth'
                            onChange={getEditedUserFormValues}
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="******"
                            name='password'
                            onChange={getEditedUserFormValues}
                        />
                        <label>Repeat Password</label>
                        <input
                            type="password"
                            placeholder="******"
                            name='repeatPassword'
                            onChange={getEditedUserFormValues}
                        />
                        <button type='submit' onClick={handleUpdateUserSubmit}>SAVE</button>
                    </form>
                </div>
            </div>
        </div>
    )
};