import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";


import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CloseIcon from '@mui/icons-material/Close'
import HomeIcon from '@mui/icons-material/Home';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GradeIcon from '@mui/icons-material/Grade';

const useStyles = makeStyles({
    body: {
      width: "auto",
      color:"#8FE3CF",
      background: "#2B4865", 
      display: "flex",
      flexFlow: "column"
    }
  });
  
function Home(){
    const style = useStyles();
    const navigator=useNavigate();


    const onMenuItemClick=(selectedItem:string)=>{
      navigator(`/${selectedItem}`);
  }

    return (
      <div style={{flexGrow: 1}}>
            <h1>Home page</h1>
            <Grid container spacing={3} style={{padding:'25px'}}>
              <Grid container item xs={12} sm={6} style={{background:"#002B5B",margin:'15px'}}>
                <h4>
                  Hi, I'm Luka Radovanovic, and this is my personal web presentation.    
                </h4>
              
                
              </Grid> 
                <Grid container item xs={12} sm={5} style={{background:"#002B5B",margin:'15px'}}>
                  <Button size="small"  style={{background:'#446145',color:'#8FE3CF',padding:'5px',margin:'5px'}} onClick={()=>onMenuItemClick('biography')}>
                      <PersonSearchIcon/>
                      <Typography  sx={{ fontSize: 14 }} style={{marginLeft:'5px'}}>
                        Biography 
                      </Typography>
                  </Button>
                  <Button size="small"  style={{background:'#6c7a6c',color:'#8FE3CF',padding:'5px',margin:'5px'}} onClick={()=>onMenuItemClick('expirience')}>
                      <WorkHistoryIcon/>
                      <Typography  sx={{ fontSize: 14 }} style={{marginLeft:'5px'}}>
                      Expirience
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
               </Grid> 
           </Grid>
        </div>
    )
}


export default Home;