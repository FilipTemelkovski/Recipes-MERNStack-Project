import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
        <ul>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/Breakfast'>Breakfast</Link></li>
            <li><Link to='/Brunch'>Brunch</Link></li>
            <li><Link to='/Lunch'>Lunch</Link></li>
            <li><Link to='/Dinner'>Dinner</Link></li>
            <li><Link to='/CreateAccount'>CREATE ACCOUNT</Link></li>
            <li><Link to='/Login'>LOGIN</Link></li>
        </ul>
    </div>
  )
}

