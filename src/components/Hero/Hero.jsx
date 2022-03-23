import React from 'react';

import { Grid, Typography } from '@mui/material';

import useStyles from './styles';

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <div className={classes.background}>
          <img src="#" alt="" />
        </div>
        <Grid container className={classes.textContainer} justifyContent='center' alignItems='center' direction='column'>
              <Grid item><Typography>Slogan Slogan</Typography></Grid>
              <Grid item><Typography>Lorem ipsum dor sim amet</Typography></Grid>
        </Grid>
    </div>
  )
}

export default Hero