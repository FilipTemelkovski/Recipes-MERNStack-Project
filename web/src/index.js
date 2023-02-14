import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { RecipeProvider } from './context/RecipesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <UserProvider>
      <RecipeProvider>
        <App />
      </RecipeProvider>
    </UserProvider>
  </Router>
);

