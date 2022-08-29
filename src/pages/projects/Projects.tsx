
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from '../../components/projectCard/ProjectCard'
import Item  from '@material-ui/core/ListItem'


const useStyles = makeStyles({
    body: {
      width: "auto",
      color:"#8FE3CF",
      background: "#2B4865", 
      display: "flex",
      flexFlow: "column",
      height: "100vh",
      flexGrow:1
    }
  });


function Projects(){
    const style=useStyles();
    const projects = ['Project 1','Project 2','Project 3','Project 4','Project 5','Project 6','Project 7','Project 8']


    return(

        <Grid container className={style.body}>
           <h1>Projects Page</h1> 
         
           <Grid container item  xs={12} style={{display:'flex'}}  spacing={3} >
              {projects.map((item)=>(
                <Grid item xs={12} sm={6}  style={{margin:'10px',padding:'10px'}}>
                  <ProjectCard projectName={item}/>
                </Grid>
              ))}
          </Grid>

              {/*
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Item>xs=2</Item>
                  </Grid>
                ))}
              </Grid>  */}
        </Grid>

    )
}


export default Projects;