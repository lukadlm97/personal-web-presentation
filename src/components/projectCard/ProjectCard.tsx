import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
          return '#898AA6';
          case ProjectTechnologiesType.Frontend:
          return '#C9BBCF';
          case ProjectTechnologiesType.ML:
          return '#B7D3DF';
          case ProjectTechnologiesType.FullStack:
          return '#D6EFED';
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
          return 'Full stack';
      }
    }







    return (
      <Box sx={{ minWidth: 275,width:400 }} style={{margin:'5px',padding:'5px',background:'#8FE3CF'}}>
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
              <CardActions>
                  <Button size="small">Learn More</Button>
              </CardActions>
          </React.Fragment>
        </Card>
      </Box>
    );
  }