import * as React from 'react';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { makeStyles } from "@material-ui/core/styles";
import BasicTable from '../basicTable/BasicTable';
import { SingleRecommendationItem } from '../../types/RecommendationsType';

const useStyles = makeStyles({
    body: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 220px)", //the width of the card 
        justifyContent: "center",
        gridGap: "20px",
    }
  });

interface IRecommendationRecord
{
    categoryName:string;
    isTableOriented:boolean;
    simpleDescription:string;
    homeMadeList:SingleRecommendationItem[];
    worldList:SingleRecommendationItem[];
}

interface ISingleRecord{
    id:number;
    name:string;
    star:number;
    author:string;
}

  export default function RecommendationItem(props:IRecommendationRecord) {
      const style=useStyles();
      
          return (
              <Box sx={{ minWidth: 275,width:400 }} style={{margin:'5px',padding:'5px',background:'#002B5B'}}>
                  <h3>{props.categoryName}</h3>
                  <Box  style={{display:'flex',margin:'2px',justifyContent: 'center'}}  >
                    <Box >
                        <BasicTable arrayOfItems={props.homeMadeList}/>
                    </Box>
                    <Box >
                        <BasicTable arrayOfItems={props.worldList}/>
                    </Box>
                </Box>
              </Box>
          );
        }