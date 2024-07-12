import React from 'react';
import { ThemeProvider, Typography } from '@material-ui/core';
import { Icon } from './components/atoms/Icons/index'; // Adjust import path if necessary
import CustomButton from './components/atoms/Button/index'; // Adjust import path if necessary
import SliderComponent from './components/atoms/Slider';
import SummaryTitle from './components/molecule/Title';
import TypeModule from './components/molecule/Term';
import Summary from './components/organism/HandleSlider/index';
import SummaryPage from './pages/SummaryPage';
import { Theme } from './themes/index'; // Adjust import path if necessary
const App = () => {
	return (
		<div>
			
			<SummaryPage />
		</div>
	);
};

export default App;
