import React from 'react'
import { NewActivity, Footer } from '../components/index'
import { Container, CssBaseline, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    margin: 0
  }
}));

const Overview = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container >
        <title>Overview</title>
        <NewActivity />
      </Container>
      <Footer />
    </div>
  )
}

export default Overview
