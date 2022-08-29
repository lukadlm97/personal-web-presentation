import * as React from 'react';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { makeStyles } from "@material-ui/core/styles";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import EducationTimelineItem from '../../components/timelineItem/EducationTimelineItem'


const useStyles = makeStyles({
    body: {
      width: "auto",
      color:"#8FE3CF",
      background: "#2B4865", 
      
      flexFlow: "column"
    }
  });

  
export default function Biography() {
    const style=useStyles();
    
        return (
            <Grid container className={style.body} >
                <h1> Biography Page</h1>
                <Grid  style={{display:'flex'}}>
                    <Grid item xs={12} style={{background:'#002B5B',marginLeft:'20px',marginBottom:'50px',padding:'10px'}}>
                        <h3>Education</h3>
                        <Timeline>
                            <EducationTimelineItem fromTo='2004-2008' schoolType='Primary school' schoolName='OS Dimitrije Tucovic - Mali Borak' level={null} domain={null} />
                            <EducationTimelineItem fromTo='2008-2012' schoolType='Primary school' schoolName='OS Mile Dubljevic - Lajkovac' level={null} domain={null} />
                            <EducationTimelineItem fromTo='2012-2016' schoolType='Secondary school' schoolName='SS 17. septembar - Lajkovac' 
                            level={null} domain='Computer technican (5.0/5.0)'/>
                            <EducationTimelineItem fromTo='2016-2020' schoolType=' Graduate Studies' schoolName='Faculty of organizational science - Universty of Belgrade' 
                            level='Bechelor of Science (9.35/10.0)' domain='Information systems and technologies' />
                            <EducationTimelineItem fromTo='2020-2021' schoolType=' Postgraduate Studies' schoolName='Faculty of organizational science - Universty of Belgrade'
                                level='Master of Science (10.0/10.0)' domain='Information systems'/>
                
                        </Timeline>
                    </Grid>
                    <Grid item xs={12} style={{background:'#002B5B',marginRight:'20px',marginLeft:'5px',padding:'10px'}}>
                        <Box >
                            <h3>
                                Details
                            </h3>
                            <Typography variant="h6" gutterBottom style={{color:'#8FE3CF'}}> Primary school </Typography>
                            <Typography variant="body1" gutterBottom style={{textAlign:'justify'}}>
                                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        );
      }