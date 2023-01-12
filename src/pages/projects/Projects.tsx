
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
        description:"APS.NET Project created follow tutorial by Wes Doyle.",
        title:"Library managment system",
        technologies:'ASP.NET,Entity Framework',
        url:"https://github.com/lukadlm97/library-managment-system",
        type:ProjectTechnologiesType.FullStack
      } as ProjectType,
      {
        id:2,
        description:"Project created at the final year of studying about the creation of new cooperation propsal with the company for IRC of FON. ",
        title:"Fpis project",
        technologies:'.NET,Newtonsoft Json,Entity Framework,React,Typescript,Material-UI,Yup,Router Dom,Axios',
        url:"https://github.com/lukadlm97/fpis-project",
        type:ProjectTechnologiesType.FullStack
      } as ProjectType,
      {
        id:3,
        description:"Project created for subject Service-oriented architecture at Master study, which demonstrate gRPC powerful in .NET 5 ",
        title:"SOA project",
        technologies:'.NET,gRPC,Dapper,AutoMapper',
        url:"https://github.com/lukadlm97/SOA-project",
        type:ProjectTechnologiesType.Backend
      } as ProjectType,
      {
        id:4,
        description:"In this project, i wanna learn React and technologies suranded by this library. Domain is Formula 1 and similar open-wheel competioton. Application should display drivers, constructors and their drivers, technical staff, competiton result, rankings and in feature some predictions for different drivers and constructors.",
        title:"F1 application (front-end)",
        technologies:'React, Typescript, Redux, Material-UI, SCSS',
        url:"https://github.com/lukadlm97/f1-web-app",
        type:ProjectTechnologiesType.Frontend
      } as ProjectType,
      {
        id:5,
        description:"Discovering the potential of prediction behaviour of time-series mentored by course from the Udemy. ",
        title:"Time Series Analyse",
        technologies:'Python, Jupyter, ARIMA, Numpy, Pandas',
        url:"https://github.com/lukadlm97/time-series-analyse/blob/main/stock_market_predictions/stock%20market%20predictions.ipynb",
        type:ProjectTechnologiesType.ML
      } as ProjectType,
      {
        id:6,
        description:"Project with contains detailed information about f1 races and qualificatons for last and current season. (Updated after Hungaroring)) ",
        title:"F1 FIA Official Data",
        technologies:'Excel',
        url:"https://github.com/lukadlm97/f1-fia-official-data",
        type:ProjectTechnologiesType.MyData
      } as ProjectType,



    ] as ProjectType[];


    return(
        <div style={{flexGrow: 1}}>  
           <h1>Projects Page</h1> 
           <Grid container spacing={3} style={{padding:'15px',justifyContent:'center'}}>
              {projectState.map((item)=>(
                <Grid container item xs={12} sm={3} style={{background:"#002B5B",margin:'5px'}}>
                  <ProjectCard projectName={item.title} description={item.description} technologies={item.technologies} url={item.url} type={item.type}/>
                </Grid>
              ))}
          </Grid>
        </div>

    )
}


export default Projects;