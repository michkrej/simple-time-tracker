import React from 'react'
import { NewActivity, Footer, LogoutButton } from '../components/index'
import { Container, makeStyles } from '@material-ui/core'
import { containerStyle } from './contants';

const OverviewPage = (props) => {
  const classes = containerStyle()
  return (
    <div className={classes.root}>
      <Container >
        <NewActivity />
      </Container>
      <LogoutButton />
      <Footer />
    </div>
  )
}

export default OverviewPage
