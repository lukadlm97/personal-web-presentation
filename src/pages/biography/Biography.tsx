import * as React from 'react';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { makeStyles } from "@material-ui/core/styles";
import Timeline from '@material-ui/lab/Timeline';
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
            <div style={{flexGrow: 1}}>
                <h1> Biography Page</h1>
                
                <Grid container spacing={3} style={{padding:'25px'}}>
                    <Grid  container item xs={12} sm={6} style={{background:"#002B5B",margin:'15px'}}>
                        <div style={{flexGrow: 1}}>
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
                        </div>
                    </Grid>
                    <Grid  container item xs={12} sm={5} style={{background:"#002B5B",margin:'15px'}}>
                        <div style={{flexGrow: 1}}>
                            <h3>Details</h3>
                            <p style={{margin:'10px',padding:'10px',textAlign:'left',marginBottom:'20px'}}>
                            I am a highly educated and skilled professional with a strong background in computer technology and information systems. 
                            </p>
                            <p style={{margin:'10px',padding:'10px',textAlign:'left',marginBottom:'50px'}}>
                                I began my educational journey in 2004 at OS Dimitrije Tucovic - Mali Borak, where I attended primary school. 
                                I then moved on to attend primary school at OS Mile Dubljevic in Lajkovac from 2008 to 2012.
                            </p>

                            <p style={{margin:'10px',padding:'10px',textAlign:'left',marginBottom:'70px'}}>
                           In 2012, I began my secondary education at SS 17. septembar in Lajkovac, where I specialized in computer technology and received a grade of 5.0/5.0.
                           
                           </p>
                           <p style={{margin:'10px',padding:'10px',textAlign:'left'}}>
                          After completing secondary school, I continued my education at the University of Belgrade. I completed my undergraduate studies at the Faculty of Organizational Science, earning a Bachelor of Science in Information Systems and Technologies with a grade point average of 9.35/10.0.
                            I then pursued my postgraduate studies at the same faculty and earned my Master of Science in Information Systems, with perfect score 10.0/10.0. With my extensive knowledge and experience, I am confident in my ability to excel in any role within the field of computer technology and information systems.
                           
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
      }