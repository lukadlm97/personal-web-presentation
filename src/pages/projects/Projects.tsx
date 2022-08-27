
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";


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


function Projects(){
    const style=useStyles();
    return(
        <Grid className={style.body}>
           <h1>Projects Page</h1> 

        </Grid>
    )
}


export default Projects;