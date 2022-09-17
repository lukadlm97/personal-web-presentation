import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Github from '@mui/icons-material/GitHub';
import {ProjectTechnologiesType} from '../../types/ProjectType'


interface ProjectCardContent{
    projectName:string;
    description:string;
    technologies:string;
    url:string;
    type:ProjectTechnologiesType;
}


  export default function ProjectCard(props:ProjectCardContent) {

    function getColor(type:ProjectTechnologiesType){
      switch(type){
        case ProjectTechnologiesType.Backend:
          return '#5D7D38';
          case ProjectTechnologiesType.Frontend:
          return '#84E61F';
          case ProjectTechnologiesType.ML:
          return '#45819F';
          case ProjectTechnologiesType.FullStack:
          return '#93FB95';
          case ProjectTechnologiesType.MyData:
            return '#3D8361';
      }
    }
    function getLabel(type:ProjectTechnologiesType){
      switch(type){
        case ProjectTechnologiesType.Backend:
          return 'Backend';
          case ProjectTechnologiesType.Frontend:
          return 'Frontend';
          case ProjectTechnologiesType.ML:
          return 'Machine Learning';
          case ProjectTechnologiesType.FullStack:
          return 'Full Stack'; 
            case ProjectTechnologiesType.MyData:
          return 'Raw Data';
      }
    }
    return (
      <Box sx={{ minWidth: 275,width:400 }} style={{margin:'5px',padding:'5px',background:'#002B5B'}}>
        <Card variant="outlined" style={{background:getColor(props.type)}}>
          <React.Fragment>
              <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {getLabel(props.type)}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {props.projectName}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                    {props.technologies}
                  </Typography>
                  <Typography variant="body2" style={{textAlign:'justify'}}>
                    {props.description}
                  </Typography>
              </CardContent>
            
          </React.Fragment>
      
        </Card>   
        <Box style={{margin:'5px',alignItems:'right'}} display="flex" justifyContent="flex-end" alignItems="flex-end">
          <Button size="small"  style={{background:'#256D85',color:'#8FE3CF'}} onClick={()=>window.open(props.url)}>
              <Github/>
              <Typography  sx={{ fontSize: 14 }} style={{marginLeft:'5px'}}>
              Git
              </Typography>
           
          </Button>
        </Box>
       
      </Box>
    );
  }