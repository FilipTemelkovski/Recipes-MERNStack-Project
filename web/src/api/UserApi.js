import { TOAST_ALERT } from "../static/toastify/Toastify";
import { URL, USERS } from "../config/Config";
import axios from 'axios';



export const CreateAccount = async (userToBeCreated) => {
    await axios.post(`${URL}${USERS}/create-user`, userToBeCreated)
      .then((response) => {
        console.log(response);
        TOAST_ALERT("User successfully created", "success");
      })
      .catch((error) =>{
        TOAST_ALERT(`${error}`, "error");
      });
      
};

export const LoginUser = async (userToBeLoggedIn) => {
  try {
     await axios.post(`${URL}${USERS}/login`, userToBeLoggedIn)
    .then(response => {
      console.log(response)
      TOAST_ALERT("User successfully created", "success");
    })
    .then(response => console.log(response))
  } catch (error) {
    TOAST_ALERT(`${error}`, "error");
  }
};
