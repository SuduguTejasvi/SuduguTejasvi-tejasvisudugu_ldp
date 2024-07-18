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
   
   {/* <UserForm/>
   <UserAccount/> */}
  {/* {isAuthenticated? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>: <button onClick={() => loginWithRedirect()}>Log In</button>} */}
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<FinanceTracker/>} />
    </Routes>
    </BrowserRouter> */}
    <FinanceTrackerPage/>

   </>
  );
}

export default App;
