import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: theme.spacing(2),
  },
  card: {
    width: '30%',
    margin: theme.spacing(1),
    backgroundColor: '#8FE3CF',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  icon: {
    marginRight: theme.spacing(2),
    fontSize: '3rem',
    color: '#002B5B',
  },
}));

interface Props {

}

const Hobbies: React.FC<Props> = () => {
  const classes = useStyles();
  const hobbies = [
    {
      category: 'Physical Activities',
      icon: <FitnessCenterIcon className={classes.icon} />,
      items: ['walking', 'playing volleyball (as an ex-volleyball player)', 'following other smaller sports like handball, athletics etc']
    },
    {
      category: 'Leisure',
      icon: <LocalCafeIcon className={classes.icon} />,
      items: ['reading books', 'going to cinema', 'concerts', 'being in nature with friends']
    },
    {
      category: 'Interests',
      icon: <LibraryBooksIcon className={classes.icon} />,
      items: ['cooking', 'follow premier league', 'F1', 'writing different content']
    }
  ];

  return (
    <div className={classes.root}>
      {hobbies.map((hobby, index) => (
        <Card key={index} className={classes.card}>
          <CardContent>
            {hobby.icon}
            <Typography className={classes.title}  gutterBottom>
              {hobby.category}
            </Typography>
            <Typography variant="h5" component="h2" >
              {hobby.items.join(', ')}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

const HobbiesPage: React.FC = () => {
    return (
      <div>
        <Hobbies />
      </div>
    )
  }
  
  export default HobbiesPage;