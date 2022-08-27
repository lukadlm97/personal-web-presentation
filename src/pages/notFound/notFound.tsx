import React from 'react';

import Grid  from '@material-ui/core/Grid'

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    list: {
        width: "auto",
      color:"#8FE3CF",
      background: "#2B4865", 
      display: "flex",
      flexFlow: "column",
      height: "100vh"
    },
    photo:{
        height: "200px",
        width: "200px"
    }
  });

function NotFound() {
    
    const classes = useStyles();
  return (
    <Grid className={classes.list}
    alignItems="center"
  justifyContent="center">
            <img   className={classes.photo} src={process.env.PUBLIC_URL+'/coala-not-found.gif'} />
            <h2>This page could not be found</h2>
    </Grid>
    
   
  );
}


export default NotFound;