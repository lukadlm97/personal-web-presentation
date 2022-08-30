
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from '../../components/projectCard/ProjectCard'

import {ProjectType,ProjectTechnologiesType} from '../../types/ProjectType'


const useStyles = makeStyles({
    body: {
      width: "auto",
      color:"#8FE3CF",
      background: "#2B4865", 
      display: "flex",
      flexFlow: "column",
     // height: "100vh",
      flexGrow:1
    }
  });


function Projects(){
    const style=useStyles();
    const projects = ['Project 1','Project 2','Project 3','Project 4','Project 5','Project 6','Project 7','Project 8'];
    const projectState=[
      {
        id:1,
        description:"description 1",
        title:"Project 1",
        technologies:'.NET,React',
        url:"https://www.google.com/",
        type:ProjectTechnologiesType.Backend
      } as ProjectType,
      {
        id:2,
        description:"description 2",
        title:"Project 2",
        technologies:'.NET,React',
        url:"https://www.google.com/",
        type:ProjectTechnologiesType.Frontend
      } as ProjectType,
      {
        id:3,
        description:"description 3",
        title:"Project 3",
        technologies:'.NET,React',
        url:"https://www.google.com/",
        type:ProjectTechnologiesType.ML
      } as ProjectType,
      {
        id:4,
        description:"description 4",
        title:"Project 4",
        technologies:'.NET,React',
        url:"https://www.google.com/",
        type:ProjectTechnologiesType.FullStack
      } as ProjectType,

    ] as ProjectType[];


    return(

        <Grid container className={style.body}>
           <h1>Projects Page</h1> 
           <Grid  container item xs={12} style={{display:'flex',margin:'5px',padding:'5px',justifyContent: 'center'}}  spacing={3} >
              {projectState.map((item)=>(
                  <ProjectCard projectName={item.title} description={item.description} technologies={item.technologies} url={item.url} type={item.type}/>
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