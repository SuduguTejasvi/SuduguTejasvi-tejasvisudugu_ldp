
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BooksTable from "./components/organisms/BooksTable";
import Add from "./components/organisms/AddBooks";
import Delete from "./components/organisms/DeleteBooks";
import Get from "./components/organisms/GetBooks";
import UpdateBook from "./components/organisms/UpdateBooks";
import NotFound from "./components/organisms/NotFoundPage";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./themes/index";
import BookStorePage from "./pages";
import React, { createContext, useState } from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, IconButton } from '@mui/material';
import { lightTheme, darkTheme } from '../src/Themes/index';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import CardLayout from './components/Template';
export const isDark = createContext(false);

const App: React.FC = () => {
    const students=[{id:'1',name:'tejasvi',marks:220},{id:'2',name:'priya',marks:200},{id:'3',name:'riya',marks:260}]
    return (
            <ThemeProvider theme={Theme}>
            <BookStorePage/>
           
            </ThemeProvider>
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

export default App;
