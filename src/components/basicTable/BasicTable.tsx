import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';

import { SingleRecommendationItem } from '../../types/RecommendationsType';



interface IListWrapper{
  arrayOfItems:SingleRecommendationItem[];
  listName:string
}

export default function BasicTable(props:IListWrapper) {
  return (
    <TableContainer component={Paper} style={{background:"#2B4865",color:'#8FE3CF'}}>
       <Grid item style={{background:"#2B4865",color:'#8FE3CF',fontSize:'16px'}}>
                    <h3>{props.listName}</h3>
        </Grid>
      <Table sx={{ background:"#2B4865",color:'#8FE3CF'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color:'#8FE3CF',fontSize:'16px'}} >Name</TableCell>
            <TableCell align="right"  style={{color:'#8FE3CF',fontSize:'16px'}}>Author</TableCell>
            <TableCell align="right"  style={{color:'#8FE3CF',fontSize:'16px'}}>Stars</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.arrayOfItems.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{color:'#8FE3CF'}}>
                {row.name}
              </TableCell>
              <TableCell align="right" style={{color:'#8FE3CF'}}>{row.author}</TableCell>
              <TableCell align="right" style={{color:'#8FE3CF'}}>
                <Rating name="size-large" defaultValue={row.star} size="large" disabled/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}