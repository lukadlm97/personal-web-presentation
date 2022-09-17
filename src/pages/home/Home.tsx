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
      flexFlow: "column",
      height: "100vh"
    }
  });
  
function Home(){
    const style = useStyles();
    const navigator=useNavigate();


    const onMenuItemClick=(selectedItem:string)=>{
      navigator(`/${selectedItem}`);
  }

    return (
        <Grid className={style.body}>
            <h1>Home page</h1>
            <Box  sx={{ minWidth: 275,width:400 }} style={{margin:'5px',padding:'5px',background:'#002B5B'}}>
              <h4>
                Hi, I'm Luka Radovanovic, and this is my personal web presentation.    
              </h4>
            </Box>
            <Box  sx={{ minWidth: 275,width:400 }} style={{margin:'5px',padding:'5px',background:'#002B5B',}}>
              <Typography style={{fontFamily:'Montserrat, serif',fontWeight:'bold'}}>
                Meet me
              </Typography>
              <Box >
                
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
              </Box>
            </Box>
           
           
        </Grid>
    )
}


export default Home;