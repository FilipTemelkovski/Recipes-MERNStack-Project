import { TOAST_ALERT } from "../static/toastify/Toastify";
import { URL, RECIPES } from "../config/Config";
import axios from "axios";

export const CreateRecipe = async (recipeToBeCreated) => {
    await axios.post(`${URL}${RECIPES}/createRecipe`, recipeToBeCreated)
      .then((response) => {
        console.log(response);
        TOAST_ALERT("Recipe successfully created", "success");
      })
      .catch((error) =>{
        TOAST_ALERT(`${error}`, "error");
      });     
};