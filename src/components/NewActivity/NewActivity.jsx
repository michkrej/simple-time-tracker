import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import DoneIcon from '@material-ui/icons/Done';

import { TimeInput, ProjectSelect } from '../index'

import { firestore } from '../../firebase/firebase.utils'

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
    minWidth: '8.66rem'
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

export const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, '')
})

const defaultOptions = [
  createOption('TDDD96'),
  createOption('TDDD60'),
  createOption('TSRT12')
]

const NewActivity = () => {
  const classes = useStyles()

  const handleSubmit = (e) => {
    e.preventDefault()
    const test = project.value
    const newActivity = { activity, test, startDate, endDate }
    alert(JSON.stringify(newActivity, null, 2))

    firestore.collection('activities').add({
      activity: activity,
      project: project.value,
      startDate: startDate,
      endDate: endDate
    })
  }

  const [activity, setActivity] = useState('')
  const [startDate, handleStartDateChange] = useState(new Date())
  const [endDate, handleEndDateChange] = useState(new Date())
  const [isLoading, setLoading] = useState(false)
  const [options, setOptions] = useState(defaultOptions)
  const [project, setProject] = useState(undefined)

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <InputBase
        className={classes.input}
        placeholder="What are you doing?"
        value={activity}
        onChange={e => setActivity(e.target.value)}
        inputProps={{ 'aria-label': 'activity input' }}
        required
        autoFocus
      />
      <ProjectSelect
        className={classes.select}
        isLoading={isLoading}
        setLoading={setLoading}
        options={options}
        setOptions={setOptions}
        value={project}
        setValue={setProject}
      />
      <TimeInput
        startDate={startDate}
        handleStartDateChange={handleStartDateChange}
        endDate={endDate}
        handleEndDateChange={handleEndDateChange}
      />
      <IconButton color='secondary' type='submit'>
        <DoneIcon />
      </IconButton>
    </Paper>
  )
}

export default NewActivity
