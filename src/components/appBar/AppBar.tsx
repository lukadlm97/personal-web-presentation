import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from '@mui/icons-material/Menu';
import Grid  from '@material-ui/core/Grid'
import Item  from '@material-ui/core/ListItem'

interface SidebarProps{

    onClick:Function
    drawerState:boolean

}


const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: 60,
		alignItems: "center",
		//padding: theme.spacing(0, 1)
        background:'#002B5B',color:'#8FE3CF',display:'flex'
	},
	fixedWidthContainer: {
		maxWidth: "240px",
		backgroundColor: "red"
	},
	titleSpacing: {
		marginRight: theme.spacing(2)
	},
	container: {
		display: "flex",
		"&>div": {
			flexGrow: "1"
		}
	}
}));
const AppBar=(props:SidebarProps)=> {
	const classes = useStyles();
    const {onClick,drawerState} =props;

    const onDrawerClick=()=>{
        //close the drawer
        //parent function 
        onClick(!drawerState)
    }
   
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);
   
    const handleDrawerState=(state:boolean)=>{
        onClick(state)
      }


    return (
        <Grid container spacing={2} style={{}} className={classes.root}>
            <Grid item xs={2}>
                     <MenuIcon className="cursor-pointer" onClick={onDrawerClick} />
            </Grid>
            <Grid item xs={9} style={{color:'#8FE3CF',marginRight:'5px',flexDirection:'row-reverse',textAlign:'right'}}>
                    Personal web presentation of Luka Radovanovic
               
            </Grid>
        </Grid>
    )
}
export default AppBar