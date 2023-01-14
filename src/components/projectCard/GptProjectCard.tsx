import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
    backgroundColor: "#2B4865",
    '&:hover': {
      backgroundColor: "#8FE3CF",
    },
  },
}));

interface ProjectCardContent{
    title:string;
    description:string;
    technologies:string;
    notes:string;
    githubLink:string; 
    image:string,
    websiteLink:string,
}

export default function ProjectCard(project:ProjectCardContent) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media}
        component="img"
        image={project.image}
        alt="CardMedia Image Example"
        height="140" title={project.title} />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {project.title}
        </Typography>
        <Typography variant="body2"  component="p">
          {project.description}
        </Typography>
        <Typography variant="body2" component="h6" >
          Technologies used: {project.technologies}
        </Typography>
        <Typography variant="body2" component="p">
          Notes:{project.notes}
        </Typography>
        <div>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            href={project.githubLink}
          >
            View on Github
          </Button>
          {project.websiteLink && (
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              href={project.websiteLink}
            >
              Visit Website
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
