export type RecommendationsType={
    id:number;
    title:string;
    description:string;
    homeMadeList:SingleRecommendationItem[];
    globalList:SingleRecommendationItem[];
  }


export type SingleRecommendationItem={
    id:number;
    name:string;
    star:number;
    author:string;
}