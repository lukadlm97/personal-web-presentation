import React from 'react'

import Drawer  from '@material-ui/core/Drawer'



import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CloseIcon from '@mui/icons-material/Close'
import HomeIcon from '@mui/icons-material/Home';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { makeStyles } from "@material-ui/core/styles";

import './sidebar.css'
import { useNavigate } from "react-router-dom";


interface SidebarProps{

    onClick:Function
    drawerState:boolean

}
const useStyles = makeStyles({
  list: {
    width: 250,
    color:"#8FE3CF"
  },
  fullList: {
    width: "auto"
  },
  paper: {
    background: "#2B4865"
  }
});


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
                    <CloseIcon onClick={onDrawerClose} classes={classes.list} style={{ color: '#8FE3CF' }}/>
                <List className={classes.list}>
                    <ListItem key='home' disablePadding>
                        <ListItemButton onClick={()=>onMenuItemClick('home')}>
                        <ListItemIcon>
                             <HomeIcon style={{ color: '#8FE3CF' }}/> 
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                        </ListItemButton>
                    </ListItem> 
                    <ListItem key='biography' disablePadding>
                        <ListItemButton onClick={()=>onMenuItemClick('biography')}>
                        <ListItemIcon>
                            <PersonSearchIcon style={{ color: '#8FE3CF' }}/>
                        </ListItemIcon>
                        <ListItemText primary='Biography' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='workHistory' disablePadding>
                        <ListItemButton onClick={()=>onMenuItemClick('workHistory')}>
                        <ListItemIcon>
                            <WorkHistoryIcon style={{ color: '#8FE3CF' }}/>
                        </ListItemIcon>
                        <ListItemText primary='Expirience' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='projects' disablePadding>
                        <ListItemButton onClick={()=>onMenuItemClick('projects')}>
                        <ListItemIcon>
                            <AssignmentIcon style={{ color: '#8FE3CF' }}/>
                        </ListItemIcon>
                        <ListItemText primary='Projects' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='hobbies' disablePadding>
                        <ListItemButton onClick={()=>onMenuItemClick('hobbies')}>
                        <ListItemIcon>
                            <SportsHandballIcon style={{ color: '#8FE3CF' }}/>
                        </ListItemIcon>
                        <ListItemText primary='Hobbies' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            
        </div>
    )
}

export default Sidebar