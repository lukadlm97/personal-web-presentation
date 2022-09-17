import * as React from 'react';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { makeStyles } from "@material-ui/core/styles";
import Timeline from '@material-ui/lab/Timeline';
import Typography from '@mui/material/Typography';
import EducationTimelineItem from '../../components/timelineItem/EducationTimelineItem'


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

  
export default function Biography() {
    const style=useStyles();
    
        return (
            <Grid container className={style.body} >
                <h1> Biography Page</h1>
                <Grid  container item xs={12} style={{display:'flex',margin:'2px',justifyContent: 'center'}}  spacing={3}>
                    <Box  sx={{ minWidth: 275,width:400 }} style={{margin:'5px',padding:'5px',background:'#002B5B'}}>
                        <h3>Education</h3>
                        <Box>
                            
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
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        );
      }