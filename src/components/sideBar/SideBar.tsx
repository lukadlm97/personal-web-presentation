import React from 'react'

import Drawer  from '@material-ui/core/Drawer'



import List from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CloseIcon from '@mui/icons-material/Close'
import HomeIcon from '@mui/icons-material/Home';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GradeIcon from '@mui/icons-material/Grade';
import { makeStyles,withStyles  } from "@material-ui/core/styles";

import './sidebar.css'
import { useNavigate } from "react-router-dom";


import Footer from '../footer/Footer'
interface SidebarProps{

    onClick:Function
    drawerState:boolean

}
const useStyles = makeStyles({
  list: {
    width: 250,
    color:"#8FE3CF",
     fontFamily:'Montserrat, serif'
  },
  fullList: {
    width: "auto"
  },
  paper: {
    background: "#002B5B",
    padding:'5px',
    fontFamily:'Montserrat, serif'
  }
});

const ListItem = withStyles({
    root: {
      "&$selected": {
        backgroundColor: "red",
        color: "white",
        "& .MuiListItemIcon-root": {
          color: "white"
        }
      },
      "&$selected:hover": {
        backgroundColor: "purple",
        color: "white",
        "& .MuiListItemIcon-root": {
          color: "white"
        }
      },
      "&:hover": {
        backgroundColor: "#256D85",
        color: "#white",
        "& .MuiListItemIcon-root": {
          color: "white"
        }
      }
    },
    selected: {}
  })(MuiListItem);
const Sidebar=(props:SidebarProps) =>{

    const classes = useStyles();
    const {drawerState,onClick}=props;
    const navigator=useNavigate();

    //on drawer close 
    const onDrawerClose=()=>{
        //close the drawer
        //parent function 
        onClick(!drawerState)

    }
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
 

    const onMenuItemClick=(selectedItem:string)=>{
        navigator(`/${selectedItem}`);
        onClick(!drawerState)
    }
  
    return (
        <div className='sidebar'>
            {/* Drawer */}

            <Drawer anchor="left" open={drawerState} onClose={onDrawerClose} 
        classes={{ paper: classes.paper }}>
                    <CloseIcon onClick={onDrawerClose} classes={classes.list} style={{ color: '#8FE3CF'}}/>
                <List className={classes.list} >
                    <ListItem key='home'  style={{fontFamily:'Montserrat, serif'}} disablePadding >
                        <ListItemButton onClick={()=>onMenuItemClick('home')}>
                        <ListItemIcon>
                             <HomeIcon style={{ color: '#8FE3CF' }}/> 
                        </ListItemIcon>
                        <ListItemText  primary='Home' style={{fontFamily:'Montserrat, serif'}}/>
                        </ListItemButton>
                    </ListItem> 
                    <ListItem key='biography'  style={{fontFamily:'Montserrat, serif'}} disablePadding>
                        <ListItemButton onClick={()=>onMenuItemClick('biography')}>
                        <ListItemIcon>
                            <PersonSearchIcon style={{ color: '#8FE3CF' }}/>
                        </ListItemIcon>
                        <ListItemText primary='Biography' style={{fontFamily:'Montserrat, serif'}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='expirience' style={{fontFamily:'Montserrat, serif'}} disablePadding>
                        <ListItemButton onClick={()=>onMenuItemClick('expirience')}>
                        <ListItemIcon>
                            <WorkHistoryIcon style={{ color: '#8FE3CF' }}/>
                        </ListItemIcon>
                        <ListItemText primary='Expirience' style={{fontFamily:'Montserrat, serif'}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='projects'  style={{fontFamily:'Montserrat, serif'}} disablePadding>
                        <ListItemButton onClick={()=>onMenuItemClick('projects')}>
                        <ListItemIcon>
                            <AssignmentIcon style={{ color: '#8FE3CF' }}/>
                        </ListItemIcon>
                        <ListItemText primary='Projects' style={{fontFamily:'Montserrat, serif'}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='hobbies'  style={{fontFamily:'Montserrat, serif'}} disablePadding>
                        <ListItemButton onClick={()=>onMenuItemClick('hobbies')}>
                        <ListItemIcon>
                            <SportsHandballIcon style={{ color: '#8FE3CF' }}/>
                        </ListItemIcon>
                        <ListItemText primary='Hobbies' style={{fontFamily:'Montserrat, serif'}} />
                        </ListItemButton>
                    </ListItem> 
                     <ListItem key='recommendations'  style={{fontFamily:'Montserrat, serif'}} disablePadding>
                        <ListItemButton onClick={()=>onMenuItemClick('recommendations')}>
                        <ListItemIcon>
                            <GradeIcon style={{ color: '#8FE3CF' }}/>
                        </ListItemIcon>
                        <ListItemText primary='Recommendations'  style={{fontFamily:'Montserrat, serif'}}/>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Footer/>
            </Drawer>
            
        </div>
    )
}

export default Sidebar