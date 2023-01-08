import React, { useState, createContext, useEffect } from "react";
import { CreateAccount, LoginUser } from "../api/UserApi";
import { TOAST_ALERT } from "../static/toastify/Toastify";

export const UserContext = createContext({
    setCurrentUser: () => null,
    CreateUser: () => null,
    currentUser: null
});

export const UserProvider = ({ children }) => {
    const [createdUser, setCreatedUser] = useState(null);
    const [logedUser, setLogedUser] = useState(null);
    const [token, setToken] = useState('');

    const CreateUser = async (userToBeCreated) => {
        await CreateAccount(userToBeCreated);
    };

    const getCreateUserFormValues = (event) => {
        const { name, value } = event.target;
        setCreatedUser({ ...createdUser, [name]: value });
    };
    console.log(createdUser)

    const handleCreateUserSubmit = (event) => {
        event.preventDefault();
        if (createdUser.password !== createdUser.repeatPassword)
            TOAST_ALERT("Password and repeat password are not the same!", "error");
        else CreateUser(createdUser);
    };

    const getLoginFormValues = (event) => {
        const { name, value } = event.target;
        setLogedUser({ ...logedUser, [name]: value });
    };
    console.log(logedUser)

    const handleLoginUserSubmit = async (event) => {
        event.preventDefault();
        let res = await LoginUser(logedUser)
        console.log(res)
        // .then((response) =>{
        //     console.log(response)
        //     setToken(response);
        //     console.log(token);
        // })
        // .catch((error)=>{
        //     console.log(error);
        // })
    };

    const value = {
        createdUser,
        setCreatedUser,
        CreateUser,
        getCreateUserFormValues,
        handleCreateUserSubmit,
        getLoginFormValues,
        handleLoginUserSubmit
    };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};





