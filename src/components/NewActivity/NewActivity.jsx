import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import DoneIcon from '@material-ui/icons/Done';

import { TimeInput, ProjectSelect } from '../index'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%',
    minHeight: '50px',
    marginTop: theme.spacing(2)
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    minWidth: '10rem'
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  timePicker: {
    width: '10.8rem'
  },
  select: {
    padding: theme.spacing(1),
    minWidth: '10rem'
  }
}))

const NewActivity = (props) => {
  const classes = useStyles()

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="What have you been up to?"
        inputProps={{ 'aria-label': 'activity input' }}
      />
      <ProjectSelect className={classes.select} />
      <TimeInput/>
      <IconButton color='secondary' type='submit'>
        <DoneIcon />
      </IconButton>
    </Paper>
  )
}

export default NewActivity
