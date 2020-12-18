import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { fetchItemDetails } from './store/item.actions';
import { Link } from 'react-router-dom';
import { Avatar, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
});

const Item = ({ name, details, fetchItemDetails }: any) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} onLoad={() => fetchItemDetails()}>
      <Grid item xs={12}>
        <h1>{name}</h1>
        <Paper variant="outlined">
          <div>
            <img alt="front" src={details.sprites.front_default} />

            <img alt="back" src={details.sprites.back_default} />

            <img alt="front shiny" src={details.sprites.front_shiny} />
          </div>
        </Paper>
      </Grid>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="250"
            image={details.sprites.back_default}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
              {details.weight}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link key={name} to="/">
            <Button size="small" color="primary" href="/">
              Volver
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

const mapStateToProps = (state: any) => ({
  details: state.marketPlace.details,
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    fetchItemDetails: () => dispatch(fetchItemDetails({ name: ownProps.name })),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Item);
