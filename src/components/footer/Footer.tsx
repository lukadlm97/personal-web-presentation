import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Email from '@mui/icons-material/Email';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Github from '@mui/icons-material/GitHub';
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({
    root: {
        "&  .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "#8FE3CF",
            "&:hover": {
                fill: '#8FE3CF',
                fontSize: '1.8rem'
            }
        }
    }
})



const Footer = () => {
    const [value, setValue] = React.useState('recents');
    const classes = useStyles(); 
    
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        console.log(newValue)
      };
    return (
        <BottomNavigation style={{ background: '#2B4865',width:'auto' }} value={value} onChange={()=>handleChange}>
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<Email />}
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                value="recents2"
                href="https://rs.linkedin.com/in/luka-radovanovic-fon"
                icon={<LinkedIn />}
                
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                value="recents3"
                href="https://github.com/lukadlm97"
                icon={<Github />}
            />
        </BottomNavigation >
    )
}

export default Footer