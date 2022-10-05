import * as React from 'react';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { makeStyles } from "@material-ui/core/styles";
import {RecommendationsType,SingleRecommendationItem}  from '../../types/RecommendationsType'
import RecommendationItem from '../../components/recommendationItem/RecommendationItem'

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
  const recommendationsState=[
    {
      id:1,
      description:"As a movie lover, i colud recommened you a next few titiles",
      title:"Movies top list",
        homeMadeList:[{
            id:1,
            name:"Munje",
            star:5,
            author:"Radivoj Andric"
        } as SingleRecommendationItem],
        globalList:[{
            id:1,
            name:"La vita è bella",
            star:5,
            author:"Roberto Benigni"
        } as SingleRecommendationItem]
    } as RecommendationsType,
    {
        id:1,
        description:"As a movie lover, i colud recommened you a next few titiles",
        title:"Movies top list",
          homeMadeList:[{
              id:1,
              name:"Munje",
              star:5,
              author:"Radivoj Andric"
          } as SingleRecommendationItem],
          globalList:[{
              id:1,
              name:"La vita è bella",
              star:5,
              author:"Roberto Benigni"
          } as SingleRecommendationItem]
      } as RecommendationsType,
  


  ] as RecommendationsType[];

  
export default function Recommendation() {
    const style=useStyles();
    
        return (
            <Grid container className={style.body} >
                <h1> Recommendation Page</h1>
                <Grid  container item xs={12} style={{display:'flex',margin:'2px',justifyContent: 'center'}}  spacing={3}>
                {recommendationsState.map((item)=>(
                  <RecommendationItem 
                  categoryName={item.title}
                  simpleDescription={item.description}
                  key={item.id}
                  isTableOriented={true}
                  homeMadeList={item.homeMadeList}
                  worldList={item.globalList}
                  />
              ))}
                </Grid>
            </Grid>
        );
      }