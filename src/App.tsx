import React, { createContext, useState } from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, IconButton } from '@mui/material';
import { lightTheme, darkTheme } from '../src/Themes/index';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import CardLayout from './components/Template';
export const isDark = createContext(false);

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <isDark.Provider value={isDarkMode}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <IconButton 
          onClick={toggleTheme} 
          style={{ position: 'absolute', top: 20, right: 20, color: isDarkMode ? '#fff' : '#000' }}
        >
          {isDarkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <CardLayout/>
       
      </ThemeProvider>
    </isDark.Provider>
  );
}

export default App;
