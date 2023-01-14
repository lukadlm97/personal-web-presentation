import React from 'react';
import logo from './logo1.png';
import './App.css';
import { css } from "@emotion/react";

import {createTheme,makeStyles} from '@material-ui/core'
import {ThemeProvider} from '@material-ui/styles'
import Navigator from './Navigator';
import AppBar from './components/appBar/AppBar'
import SideBar from './components/sideBar/SideBar'
import Footer from './components/footer/Footer'


const useStyles = makeStyles({
  body: {
    width: "auto",
      color:"#8FE3CF",
      background: "#2B4865", 
    textAlign: 'center',
      flexFlow: "column",
      fontFamily:'Montserrat, serif'
  },
  appBar:{
    fontFamily:'Montserrat, serif'
  }
});


function App() {
  const [drawerState, setDrawerState] = React.useState(false)
  const style = useStyles();
  
  //handle drawer state
    const handleDrawerState=(state:boolean)=>{
        setDrawerState(state)
    }

  return (
 // <ThemeProvider theme={theme}>
    <div className={style.appBar}>
      <AppBar drawerState={drawerState} onClick={handleDrawerState}/>
      <SideBar drawerState={drawerState} onClick={handleDrawerState}/>
      <div className={style.body}>
        <Navigator/>
      </div>
    </div>
//  </ThemeProvider>
     
  );
}

export default App;
