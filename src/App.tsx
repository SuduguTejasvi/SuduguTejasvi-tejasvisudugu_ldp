import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyntraCard from './components/organism/Card';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/Themes/index';
import CardTemplate from './Template/Cardtemplate';
function App() {
  return (
    <ThemeProvider theme={theme}>
      
      <CardTemplate><MyntraCard/></CardTemplate>
      
    </ThemeProvider>
  );
}

export default App;
