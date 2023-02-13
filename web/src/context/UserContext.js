import React, { useState, createContext, useEffect } from "react";
import { CreateAccount, LoginUser } from "../api/UserApi";
import { TOAST_ALERT } from "../static/toastify/Toastify";
import axios from 'axios';
import { URL, USERS } from "../config/Config";

export const UserContext = createContext({
    setCurrentUser: () => null,
    CreateUser: () => null,
    currentUser: null
});

export const UserProvider = ({ children }) => {
    const [createdUser, setCreatedUser] = useState(null);
    const [logedUser, setLogedUser] = useState(null);
    const [updatedUser, setUpdatedUser] = useState(null);
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);
    const [token, setToken] = useState('');

    const CreateUser = async (userToBeCreated) => {
        await CreateAccount(userToBeCreated);
    };

    const getCreateUserFormValues = (event) => {
        const { name, value } = event.target;
        setCreatedUser({ ...createdUser, [name]: value });
    };

    const handleCreateUserSubmit = async (event) => {
        event.preventDefault();
        if (createdUser.password !== createdUser.repeatPassword)
            TOAST_ALERT("Password and repeat password are not the same!", "error");
        else await CreateUser(createdUser);
    };

    const getLoginFormValues = (event) => {
        const { name, value } = event.target;
        setLogedUser({ ...logedUser, [name]: value });
    };

    const currentlyLoggedInUser = () => {
        const user = localStorage.getItem("loggedInUser")
        return JSON.parse(user);
    }

    const getEditedUserFormValues = (event) => {
        const { name, value } = event.target;
        const user =  JSON.parse(localStorage.getItem("loggedInUser"));
        setUpdatedUser({ ...updatedUser, [name]: value, id: user._id});
    }

    const handleUpdateUserSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(updatedUser)
            await axios.post(`${URL}${USERS}/updateUser`, updatedUser)
                .then(response => {
                    console.log(response)
                    // TOAST_ALERT("ASSSSSSSSSSS", "success");
                    // setCurrentLoggedInUser(response.data) 
                });
        } catch (error) {
            console.log(error)
            TOAST_ALERT(`${error}`, "error");
        }
    }

    const handleLoginUserSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`${URL}${USERS}/login`, logedUser)
                .then(async response => {
                    TOAST_ALERT("User successfully logged in", "success");
                    console.log(response.data)
                    localStorage.setItem("loggedInUser", JSON.stringify(response.data.user))
                    setCurrentLoggedInUser(localStorage.getItem("loggedInUser"));
                    
                });
        } catch (error) {
            TOAST_ALERT(`${error}`, "error");
        }
    };


    const value = {
        createdUser,
        setCreatedUser,
        CreateUser,
        getCreateUserFormValues,
        handleCreateUserSubmit,
        getLoginFormValues,
        handleLoginUserSubmit,
        currentlyLoggedInUser,
        getEditedUserFormValues,
        handleUpdateUserSubmit,
        updatedUser,
    };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};





