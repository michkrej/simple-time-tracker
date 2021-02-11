import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import FolderIcon from '@material-ui/icons/Folder'
import DirectionsIcon from '@material-ui/icons/Directions'
import { Select, MenuItem, InputLabel, FormControl, TextField } from '@material-ui/core'
import { KeyboardDateTimePicker } from '@material-ui/pickers'
import moment from 'moment'

import { TimeInput } from '../index'

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
    padding: theme.spacing(1)
  }
}))

const NewActivity = (props) => {
  const classes = useStyles()
  const options = ['None', 'TDDD96', 'TDDD60', 'TSRT12']
  const [project, setPoject] = useState(options[1])
  const [selectedDate, handleDateChange] = useState(new Date())

  const handleChange = (e) => {
    setPoject(e.target.value)
  }

  const isToday = (date) => {
    const currentDate = new Date()
    if (date._isAMomentObject) {
      return date._d.getDate() === currentDate.getDate() && date._d.getMonth() === currentDate.getMonth()
    }
    return date.getDate() === currentDate.getDate() && date.getMonth() === currentDate.getMonth()
  }

  isToday(selectedDate)

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="What have you been up to?"
        inputProps={{ 'aria-label': 'activity input' }}
      />
      <FormControl>
        <Select
          placeholder="Project"
          disableUnderline
          value={project}
          onChange={handleChange}
          defaultValue={options[0]}
          className={classes.select}
        >
          {options.map(option => {
            return (<MenuItem id={option} key={option} value={option}>{option}</MenuItem>)
          })}
        </Select>
      </FormControl>
      <TimeInput/>
    </Paper>
  )
}

export default NewActivity
