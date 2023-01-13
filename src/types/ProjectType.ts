export type ProjectType={
    id:number;
    title:string;
    description:string;
    technologies:string;
    url:string;
    type:ProjectTechnologiesType;
    image:string;
  }

  export enum ProjectTechnologiesType{
    Frontend,
    Backend,
    ML,
    FullStack,
    MyData,
    Algos
  }

