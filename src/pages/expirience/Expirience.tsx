import * as React from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

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