import React from 'react'

import Drawer  from '@material-ui/core/Drawer'
import CloseIcon from '@mui/icons-material/Close'
import GroupsIcon from '@mui/icons-material/Groups';
import PagesIcon from '@mui/icons-material/Pages';

import './sidebar.css'
import { useNavigate } from "react-router-dom";


interface SidebarProps{

    onClick:Function
    drawerState:boolean

}


const Sidebar=(props:SidebarProps) =>{

    const {drawerState,onClick}=props;
    const navigator=useNavigate();

    //on drawer close 
    const onDrawerClose=()=>{
        //close the drawer
        //parent function 
        onClick(!drawerState)

    }
 

    const onMenuItemClick=(selectedItem:string)=>{
        navigator(`/${selectedItem}`);
        onClick(!drawerState)
    }

    return (
        <div className='sidebar'>
            {/* Drawer */}

            <Drawer anchor="left" open={drawerState} onClose={onDrawerClose}>
                <div >
                    <CloseIcon onClick={onDrawerClose}/>
                    <div>
                        <h2>F1 Menu</h2>
                        <ul>
                            <li  onClick={()=>onMenuItemClick('home')}>
                                    <span><PagesIcon/></span>
                                    <h2>Home</h2>
                            </li>
                            <li onClick={()=>onMenuItemClick('projects')}>
                                    <span ><GroupsIcon/></span>
                                    <h2>Projects</h2>
                            </li>
                        </ul>
                    </div>


                </div>
            </Drawer>
            
        </div>
    )
}

export default Sidebar