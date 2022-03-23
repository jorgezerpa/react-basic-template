import React from 'react';

import { AppBar, Toolbar, Typography, Grid, Icon } from '@mui/material';

import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
            <Icon className={classes.logo}>
                <img src="#" alt="" />
            </Icon>
            <Toolbar className={classes.toolbar}>
                <Grid className={classes.toolbarGrid} container justifyContent='space-between' alignItems='center'>
                      <Grid item className={classes.toolbarItem}><Typography>Home</Typography></Grid>
                      <Grid item className={classes.toolbarItem}><Typography>Tienda</Typography></Grid>
                      <Grid item className={classes.toolbarItem}><Typography>Contacto</Typography></Grid>
                      <Grid item className={classes.toolbarItem}><Typography>Blog</Typography></Grid>
                </Grid>
            </Toolbar>
    </AppBar>
  )
}

export default Navbar