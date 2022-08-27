import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

import Grid  from '@material-ui/core/Grid'

import Item  from '@material-ui/core/ListItem'



interface SidebarProps{

    onClick:Function
    drawerState:boolean

}
const AppBar=(props:SidebarProps)=> {
    const {onClick,drawerState} =props

   
    //on drawer close 
    const onDrawerClick=()=>{
        //close the drawer
        //parent function 
        onClick(!drawerState)

    }
   
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);
   
  
    //handle drawer state
      const handleDrawerState=(state:boolean)=>{
        onClick(state)
      }


    return (
        <Grid container spacing={2} style={{background:'#2B4865',color:'#8FE3CF'}}>
            <Grid item xs={8}>
                <Item>
                     <MenuIcon className="cursor-pointer" onClick={onDrawerClick} />
                </Item>
            </Grid>
            <Grid item xs={4} container justify="flex-end">
                <Item style={{color:'#8FE3CF'}}>Personal web presentation of Luka Radovanovic</Item>
            </Grid>
        </Grid>
    )
}
export default AppBar