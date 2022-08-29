import * as React from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    body: {
      width: "auto",
      color:"#8FE3CF",
      background: "#2B4865", 
      display: "flex",
      flexFlow: "column",
      height: "100vh"
    }
  });

export default function ExpirienceTimeline() {
const style=useStyles();

    return (
        <Grid container className={style.body} >
            <h1>Expirience Page</h1>
        </Grid>
    );
  }