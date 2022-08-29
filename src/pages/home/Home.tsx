import { Link } from "react-router-dom";
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
  
function Home(){
    const style = useStyles();

    return (
        <Grid className={style.body}>
            <h1>Home page</h1>
            <h4>
        Hi, I'm Luka Radovanovic, and this is my personal web presentation.    
      </h4>
    </Grid>
    )
}


export default Home;