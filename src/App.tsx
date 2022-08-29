import React from 'react';
import logo from './logo1.png';
import './App.css';
import { css } from "@emotion/react";

import {createTheme} from '@material-ui/core'
import {ThemeProvider} from '@material-ui/styles'
import Navigator from './Navigator';
import AppBar from './components/appBar/AppBar'
import SideBar from './components/sideBar/SideBar'


//create material UI theme 
const theme = createTheme({
  palette: {
    primary: {
      main: '#D3E4CD',
      dark: '#f09c01',
    },
    secondary: {
      main: '#11cb5f',
    },
    text: {
      primary: '#373585',
      secondary: '#a4a6b3',
    },
    background: {
      default: '#f7f8fc',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans- serif',
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    htmlFontSize: 20,
  },
})
function App() {
  const [drawerState, setDrawerState] = React.useState(false)

  
  //handle drawer state
    const handleDrawerState=(state:boolean)=>{
        setDrawerState(state)
    }

  return (
  <ThemeProvider theme={theme}>
    <div className="App">
      <AppBar drawerState={drawerState} onClick={handleDrawerState}/>
      <SideBar drawerState={drawerState} onClick={handleDrawerState}/>
      <Navigator/>
    </div>
  </ThemeProvider>
     
  );
}

export default App;
