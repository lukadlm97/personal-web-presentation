import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { SingleRecommendationItem } from '../../types/RecommendationsType';



interface IListWrapper{
  arrayOfItems:SingleRecommendationItem[];
  listName:string
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: 275,
    maxWidth: 600,
    margin: theme.spacing(2),
    backgroundColor: "#002B5B",
  },
  media: {
    height: 200,
    paddingTop: '10.25%', // 16:9 aspect ratio
  },
  content: {
    flex: '1 0 auto',
    textAlign: 'center',
    color: "#8FE3CF"
  },
  button: {
    margin: theme.spacing(2),
    backgroundColor: "#8FE3CF",
    '&:hover': {
      backgroundColor: "#002B5B",
    },
  },
}));

export default function BasicTable(props:IListWrapper) {
 const classes = useStyles();
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
            <TableCell align="right"  style={{color:'#8FE3CF',fontSize:'16px'}}>Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.arrayOfItems.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            > 
            <TableCell component="th" scope="row" style={{color:'#8FE3CF'}}>
            {row.id}. {row.name}
           </TableCell>
              <TableCell align="right" style={{color:'#8FE3CF'}}>
                {row.author}
              </TableCell>
              <TableCell align="right" style={{color:'#8FE3CF',padding:'5px'}}>
              <Button
                className={classes.button}
                variant="contained"
                color="info"
                href={row.imdburl}
              >
                 details
              </Button>
             
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}