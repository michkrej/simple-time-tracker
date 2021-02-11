import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

import { Footer, LogoutButton } from '../components';
import { containerStyle } from './contants';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(15)
  }
}));

const StartPage = () => {
  const classes = useStyles()

  return (
    <div className={containerStyle().root}>
      <Grid container className={classes.root} justify='center'>
        <Grid item>
          <Typography variant='h1' component='h2' align='center'>Simple Time Tracker</Typography>
        </Grid>
      </Grid>
      <LogoutButton />
      <Footer />
    </div>
  )
}

export default StartPage
