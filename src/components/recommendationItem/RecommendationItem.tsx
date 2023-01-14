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

  export default function RecommendationItem(props:IRecommendationRecord) {
      const style=useStyles();
      
          return (
             
                <div style={{flexGrow: 1}}>
                    <h3>{props.categoryName}</h3>
                    <p>
                        {props.simpleDescription}
                    </p>
                    <Grid container spacing={3} style={{background:"#002B5B",padding:'5px'}}>
                        <Grid item  xs={12} sm={6} >
                            <BasicTable arrayOfItems={props.homeMadeList} listName={"Homemade list"}/>
                        </Grid>
                        <Grid item  xs={12} sm={6} >
                            <BasicTable listName={"Planetar list"} arrayOfItems={props.worldList}/>
                        </Grid>
                    </Grid> 
                </div>
         
          );
        }