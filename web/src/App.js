import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import { Navigation } from './nav/Navigation';
import { HomePage } from './pages/HomePage';
import { BreakfastPage } from './pages/BreakfastPage';
import { BrunchPage } from './pages/BrunchPage';
import { LunchPage } from './pages/LunchPage';
import { DinnerPage } from './pages/DinnerPage';
import { CreateAccountPage} from './pages/CreateAccountPage';
import { LoginPage } from './pages/LoginPage';
import { ToastContainer } from 'react-toastify';

export function App() {
  return (
    <div className="App">
      <Navigation/>
      <ToastContainer />
      <Routes>
        <Route  path='/home' element={<HomePage/>}/>
        <Route  path='/Breakfast' element={<BreakfastPage/>}/>
        <Route  path='/Brunch' element={<BrunchPage/>}/>
        <Route  path='/Lunch' element={<LunchPage/>}/>
        <Route  path='/Dinner' element={<DinnerPage/>}/>
        <Route  path='/CreateAccount' element={<CreateAccountPage/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
      </Routes>
      
    </div>
  );
}

