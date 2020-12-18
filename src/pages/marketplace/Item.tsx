import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {},
  name: {
    textTransform: 'capitalize',
  },
  link: {
    color: 'black',
  },
});

export default function Item({ name, url }: any) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link className={classes.link} to={`marketplace/${name}`}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="250"
            image="react-marketplace/pokemon.jpg"
            title="Pokemon"
          />
          <CardContent>
            <Typography
              className={classes.name}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {name}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Link to={`marketplace/${name}`}>
          <Button size="small" color="primary">
            Ver Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
