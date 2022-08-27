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
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <Item>
                     <MenuIcon className="cursor-pointer" onClick={onDrawerClick} />
                </Item>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={4}>
                <Item>Luka Radovanovic</Item>
            </Grid>
            </Grid>
    )
}
export default AppBar