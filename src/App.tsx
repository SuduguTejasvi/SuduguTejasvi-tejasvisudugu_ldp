import React from 'react';
import { ThemeProvider, Typography } from '@material-ui/core';
import { Icon } from './components/atoms/Icons/index'; // Adjust import path if necessary
import CustomButton from './components/atoms/Button/index'; // Adjust import path if necessary
import SliderComponent from './components/atoms/Slider';
import SummaryTitle from './components/molecule/Title';
import TypeModule from './components/molecule/Term';
import Summary from './components/organism/HandleSlider/index';
import SummaryPage from './pages/SummaryPage';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import UserAccount from './practicse/Account';
import UserForm from '../src/practicse/Form';
import Home from './components/organisms/Home';
import FinanceTracker from './components/organisms/FinanceTracker';
import FinanceTrackerPage from './pages';
import { Theme } from './themes/index'; // Adjust import path if necessary
const App = () => {
	return (
		<div>
			
			<SummaryPage />
      <FinanceTrackerPage/>
		</div>
	);
};

export default App;
