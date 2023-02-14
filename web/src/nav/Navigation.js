import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components/logoComponent/LogoComponent";

export const Navigation = () => {
  return (
    <div>
        <ul>
            <li><Link to='/Home'><Logo/></Link></li>
            <li><Link to='/Breakfast'>Breakfast</Link></li>
            <li><Link to='/Brunch'>Brunch</Link></li>
            <li><Link to='/Lunch'>Lunch</Link></li>
            <li><Link to='/Dinner'>Dinner</Link></li>
            <li><Link to='/CreateAccount'>CREATE ACCOUNT</Link></li>
            <li><Link to='/Login'>LOGIN</Link></li>
            <li><Link to='/MyRecipes'>MY RECIPES</Link></li>
            <li><Link to='/MyProfile'>MY PROFILE</Link></li>
            <li><Link to='/Logout'>LOG OUT</Link></li>
        </ul>
    </div>
  )
}

