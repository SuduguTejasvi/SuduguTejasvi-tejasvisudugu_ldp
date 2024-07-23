import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import UserAccount from './practicse/Account';
import UserForm from '../src/practicse/Form';
import Home from './components/organisms/Home';
import FinanceTracker from './components/organisms/FinanceTracker';
import FinanceTrackerPage from './pages';
// import FinanceTrackerPage from '../src/pages/index'
function App() {
  const {user, loginWithRedirect ,isAuthenticated} = useAuth0();
  const { logout } = useAuth0();
  return (
   <>
    <FinanceTrackerPage/>

   </>
  );
}

export default App;
