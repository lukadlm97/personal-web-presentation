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


const useStyles = makeStyles({
    body: {
      width: "auto",
      color:"#8FE3CF",
      background: "#2B4865", 
      display: "flex",
      flexFlow: "column"
    }
  });

  
export default function Biography() {
    const style=useStyles();
    
        return (
            <Grid container className={style.body} >
                <h1> Biography Page</h1>
                <Grid container style={{display:'flex'}}>
                    <Grid item xs={5} style={{background:'#002B5B',margin:'50px',padding:'10px'}}>
                        <h3>Education</h3>
                        <Timeline>
                            <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                                style={{ color: '#8FE3CF' }}
                            >
                                2004-2008
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                <SchoolIcon style={{ color: '#256D85' }}/>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span"
                                >
                                Primary school
                                </Typography>
                                <Typography>OS Dimitrije Tucovic - Mali Borak</Typography>
                            </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                                style={{ color: '#8FE3CF' }}
                            >
                                2008-2012
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                <SchoolIcon style={{ color: '#256D85' }}/>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span"
                                >
                                Primary school
                                </Typography>
                                <Typography>OS Mile Dubljevic - Lajkovac</Typography>
                            </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                                style={{ color: '#8FE3CF' }}
                            >
                                2012-2016
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                <SchoolIcon style={{ color: '#256D85' }}/>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                Secondary school
                                </Typography>
                                <Typography>SS 17. septembar - Lajkovac</Typography>
                                <Typography>Computer technican (5.0/5.0)</Typography>
                            </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                                style={{ color: '#8FE3CF' }}
                            >
                                2016-2020
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                <SchoolIcon style={{ color: '#256D85' }}/>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span"
                                >
                                Graduate Studies
                                </Typography>
                                <Typography>Faculty of organizational science - Universty of Belgrade</Typography>
                                <Typography>Information system and technologes</Typography>
                                <Typography>Bachelor of Science (9.35/10.0)</Typography>
                            </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                                style={{ color: '#8FE3CF' }}
                            >
                                2020-2021
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                <SchoolIcon style={{ color: '#256D85' }}/>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span"
                                >
                                Postgraduate Studies
                                </Typography>
                                <Typography>Faculty of organizational science - Universty of Belgrade</Typography>
                                <Typography>Information systems</Typography>
                                <Typography>Master of Science (10.0/10.0)</Typography>
                            </TimelineContent>
                            </TimelineItem>

                        
                        </Timeline>
                    </Grid>
                    <Grid item xs={5} style={{textAlign:'justify',background:'#002B5B',margin:'50px',padding:'10px'}}>
                        <Box >
                            
                            <h2>
                                Details
                            </h2>
                            <Typography variant="h6" gutterBottom style={{color:'#8FE3CF'}}> Primary school </Typography>
                            <Typography variant="body1" gutterBottom>
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