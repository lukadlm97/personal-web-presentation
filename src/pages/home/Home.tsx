import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GradeIcon from '@mui/icons-material/Grade';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#002B5B',
    color:'#8FE3CF',
    textAlign:'left'
  },
  container: {
    backgroundColor: '#2B4865',
    color:'#8FE3CF'
  },
  header: {
    backgroundColor: '#002B5B',
    color:'#8FE3CF',
    padding:'20px'
  },
}));

const Home = () => { 
  const navigator=useNavigate();


  const onMenuItemClick=(selectedItem:string)=>{
    navigator(`/${selectedItem}`);
}
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.header}>
              <h1>Hi, my name is Luka, and I don't live on the second floor.</h1>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                  <Button size="small"  style={{background:'#446145',color:'#8FE3CF',padding:'5px',margin:'5px'}} onClick={()=>onMenuItemClick('biography')}>
                      <PersonSearchIcon/>
                      <Typography  sx={{ fontSize: 14 }} style={{marginLeft:'5px'}}>
                        Biography 
                      </Typography>
                  </Button>
                  <Button size="small"  style={{background:'#6c7a6c',color:'#8FE3CF',padding:'5px',margin:'5px'}} onClick={()=>onMenuItemClick('expirience')}>
                      <WorkHistoryIcon/>
                      <Typography  sx={{ fontSize: 14 }} style={{marginLeft:'5px'}}>
                      Experience
                      </Typography>
            
                  </Button>
                  <Button size="small"  style={{background:'#215921',color:'#8FE3CF',padding:'5px',margin:'5px'}} onClick={()=>onMenuItemClick('projects')}>
                      <AssignmentIcon/>
                      <Typography  sx={{ fontSize: 14 }} style={{marginLeft:'5px'}}>
                      Projects
                      </Typography>
            
                  </Button>
                  <Button size="small"  style={{background:'#4a574a',color:'#8FE3CF',padding:'5px',margin:'5px'}} onClick={()=>onMenuItemClick('hobbies')}>
                      <SportsHandballIcon/>
                      <Typography  sx={{ fontSize: 14 }} style={{marginLeft:'5px'}}>
                        Hobbies
                      </Typography>
            
                  </Button>
                  <Button size="small"  style={{background:'#1e381e',color:'#8FE3CF',padding:'5px',margin:'5px'}} onClick={()=>onMenuItemClick('recommendations')}>
                      <GradeIcon/>
                      <Typography  sx={{ fontSize: 14 }} style={{marginLeft:'5px'}}>
                        Recommendations
                      </Typography>
            
                  </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h2>ChatGPT says about me :)</h2>
              <p>
              Meet Luka Radovanovic, a 25-year-old software developer based in Belgrade. Luka is passionate about his job and is always looking for new challenges to take on. He is a lover of technology, and is always investigating the latest and greatest developments in the field.
              </p>
              <p>
              In his free time, Luka enjoys staying active and healthy by going for walks and working out. He also loves watching sports, with a particular passion for English Premier League soccer, F1 racing, and basketball. Luka is a big supporter of Red Star, and he also enjoys reading books, cooking, and looking for patterns in everyday life.
              </p>
              <p>
              As a software developer, Luka has a strong background in .NET and is constantly working to improve his skills and knowledge in this area. He is a problem solver by nature, and is always looking for ways to improve and optimize his work.
              </p>
              <p>
              Luka is a dedicated professional who is passionate about his job and is always looking for new ways to grow and improve. He is a great team player and is always willing to help others, making him a valuable asset to any team.
              </p>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
