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

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    minHeight: '50px'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 2
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  select: {
    // width: '10rem'
  }
}))

const NewActivity = (props) => {
  const classes = useStyles()
  const options = ['None', 'TDDD96', 'TDDD60', 'TSRT12']
  const [project, setPoject] = useState(options[1])

  const handleChange = (e) => {
    setPoject(e.target.value)
  }

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
          className={classes.select}
          disableUnderline
          value={project}
          onChange={handleChange}
          defaultValue={options[0]}
        >
          {options.map(option => {
            return (<MenuItem id={option} key={option} value={option}>{option}</MenuItem>)
          })}
        </Select>
      </FormControl>
    </Paper>
  )
}

export default NewActivity
