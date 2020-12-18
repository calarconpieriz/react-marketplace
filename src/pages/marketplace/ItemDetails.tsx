import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { fetchItemDetails } from './store/item.actions';
import { Link } from 'react-router-dom';
import { Avatar, Grid, Paper } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import PersonIcon from '@material-ui/icons/Person';
import LoopIcon from '@material-ui/icons/Loop';
import TextureIcon from '@material-ui/icons/Texture';
import LineWeightIcon from '@material-ui/icons/LineWeight';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: '3%',
    },
    title: {
      textTransform: 'uppercase',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    orange: {
      backgroundColor: '#ff5000',
    },
    titleHolder: {
      display: 'flex',
    },
  })
);

const Item = ({ name, details, fetchItemDetails }: any) => {
  const classes = useStyles();

  useEffect(() => {
    fetchItemDetails();
  }, [fetchItemDetails]);

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>
        <span className={classes.titleHolder}>
          <Avatar className={classes.orange}>P</Avatar>
          {name}
        </span>
      </h1>
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <Paper className={classes.paper} variant="outlined">
            <img alt="front" src={details.sprites.front_default} />
            <img alt="back" src={details.sprites.back_default} />
            <img alt="front shiny" src={details.sprites.front_shiny} />
            <Typography>
              <PersonIcon />
              <strong>Nombre:</strong> {name}
            </Typography>
            <Typography>
              <LineWeightIcon />
              <strong>Peso:</strong> {details.weight}
            </Typography>
            {details.abilities.map((item: any, index: number) => (
              <Typography>
                <CheckIcon />
                <strong>Habilidad {index + 1}:</strong> {item.ability.name}
              </Typography>
            ))}
            {details.forms.map((item: any, index: number) => (
              <Typography>
                <LoopIcon />
                <strong>Forma {index + 1}:</strong> {item.name}
              </Typography>
            ))}
            {details.types.map((item: any, index: number) => (
              <Typography>
                <TextureIcon />
                <strong>Tipo {index + 1}:</strong> {item.type.name}
              </Typography>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Link key={name} to="/">
            <Button size="small" color="primary">
              Volver
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
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
