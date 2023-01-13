
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from '../../components/projectCard/ProjectCard'
import GprProjectCard from '../../components/projectCard/GptProjectCard'

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
        description:"An ASP.NET project, following the tutorial by Wes Doyle, that aims to demonstrate the powerful capabilities of Library Management System. This project is a web application that utilizes ASP.NET, Entity Framework for server-side implementation, and allows users to manage a library's resources, where users can search for books, check them out, and renew them. ",
        title:"Library managment system",
        technologies:'ASP.NET,Entity Framework',
        url:"https://github.com/lukadlm97/library-managment-system",
        type:ProjectTechnologiesType.FullStack,
        image:process.env.PUBLIC_URL+`/img/library-managment.jpg`
      } as ProjectType,
      {
        id:9,
        description:"A 'Hello World' example of using RabbitMQ in .NET is a simple project that demonstrates the basic principles of message queues and how they can be implemented in a .NET application. This project would be a console application that uses the RabbitMQ .NET client library to send and receive messages through a RabbitMQ message broker.",
        title:"RabbitMQ DEMO",
        technologies:'C#, .NET 5, RabbitMQ',
        url:"https://github.com/lukadlm97/rabbit-mq-demo/blob/master/Consumer/Consumer.csproj",
        image:process.env.PUBLIC_URL+`/img/data-bus.jpg`,
        type:ProjectTechnologiesType.Backend
      } as ProjectType,
      {
        id:7,
        description:"Personal project for easier downloads of videos and audios from YouTube resources. ",
        title:"You Tube downloader",
        technologies:'WPF, MVVM, C#, YouTubeExplode, ConsoleAppFramework, .NET 6',
        url:"https://github.com/lukadlm97/yt-videos-downloader",
        image:process.env.PUBLIC_URL+`/img/you-tube.jpg`,
        type:ProjectTechnologiesType.MyData
      } as ProjectType,
      {
        id:2,
        description:"Project created at the final year of studying about the creation of new cooperation propsal with the company for IRC of FON. ",
        title:"Fpis project",
        technologies:'.NET,Newtonsoft Json,Entity Framework,React,Typescript,Material-UI,Yup,Router Dom,Axios',
        url:"https://github.com/lukadlm97/fpis-project",
        image:process.env.PUBLIC_URL+`/img/contract.jpg`,
        type:ProjectTechnologiesType.Backend
      } as ProjectType,
      {
        id:8,
        description:"A project created using .NET 6 and Entity Framework could be a web application that allows users to import historical data from the FIA website about Formula 1 racing from the last few years. The application would use the Entity Framework to interact with a database, where the data is stored.",
        title:"Formula racing championship",
        technologies:'.NET, Entity Framework, HtmlAgilityPack, AutoMapper, Swagger, OpenAPI',
        url:"https://github.com/lukadlm97/formula-racing-championship",
        image:process.env.PUBLIC_URL+`/img/f1-crc.jpg`,
        type:ProjectTechnologiesType.FullStack
      } as ProjectType,
      {
        id:3,
        description:"A project created for the subject of Service-oriented architecture at a Master's study level, which aims to demonstrate the powerful capabilities of gRPC in .NET 5. This project would be a web application that utilizes gRPC to communicate between the client and the server. The application would be built using C# and .NET 5, utilizing the latest features of the framework to showcase the power of gRPC in building high-performance and efficient service-oriented architectures.",
        title:"SOA project",
        technologies:'.NET,gRPC,Dapper,AutoMapper',
        url:"https://github.com/lukadlm97/SOA-project",
        image:process.env.PUBLIC_URL+`/img/master.jpg`,
        type:ProjectTechnologiesType.Backend
      } as ProjectType,
      {
        id:4,
        description:"In this project, i wanna learn React and technologies suranded by this library. Domain is Formula 1 and similar open-wheel competioton. Application should display drivers, constructors and their drivers, technical staff, competiton result, rankings and in feature some predictions for different drivers and constructors.",
        title:"F1 application (front-end)",
        technologies:'React, Typescript, Redux, Material-UI, SCSS',
        url:"https://github.com/lukadlm97/f1-web-app",
        image:process.env.PUBLIC_URL+`/img/f1.jpg`,
        type:ProjectTechnologiesType.Frontend
      } as ProjectType,
      {
        id:5,
        description:"Discovering the potential of prediction behaviour of time-series mentored by course from the Udemy. ",
        title:"Time Series Analyse",
        technologies:'Python, Jupyter, ARIMA, Numpy, Pandas',
        url:"https://github.com/lukadlm97/time-series-analyse/blob/main/stock_market_predictions/stock%20market%20predictions.ipynb",
        
        image:process.env.PUBLIC_URL+`/img/time-series.jpg`,
        type:ProjectTechnologiesType.ML
      } as ProjectType,
      {
        id:6,
        description:"Project with contains detailed information about f1 races and qualificatons for last and current season. (Updated after Hungaroring)) ",
        title:"F1 FIA Official Data",
        technologies:'Excel',
        url:"https://github.com/lukadlm97/f1-fia-official-data",
        image:process.env.PUBLIC_URL+`/img/data.jpg`,
        type:ProjectTechnologiesType.MyData
      } as ProjectType,
      



    ] as ProjectType[];


    return(
        <div style={{flexGrow: 1}}>  
           <h1>Projects Page</h1> 
           <Grid container spacing={3} style={{padding:'15px',justifyContent:'center'}}>
              {projectState.map((item)=>(
                <Grid container item xs={12} sm={3} style={{background:"#002B5B",margin:'5px'}}>
                <GprProjectCard 
                  title={item.title}
                  description={item.description}
                  technologies={item.technologies}
                  notes="/"
                  githubLink="https://github.com/username/my-project"
                  image={item.image}
                  websiteLink=''
                />
 </Grid>
              ))}
          </Grid>
        </div>

    )
}


export default Projects;