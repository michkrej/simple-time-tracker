import React from 'react'
import { NewActivity, Footer, LogoutButton, ActivityTable } from '../components/index'
import { Container, makeStyles } from '@material-ui/core'
import { containerStyle } from './contants';

const OverviewPage = (props) => {
  const classes = containerStyle()
  return (
    <div className={classes.root}>
      <Container >
        <NewActivity />
        <ActivityTable />
      </Container>
      <LogoutButton />
      <Footer />
    </div>
  )
}

export default OverviewPage
