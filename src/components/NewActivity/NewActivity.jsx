import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import DoneIcon from '@material-ui/icons/Done';
import { useFormik } from 'formik'
import { TimeInput, ProjectSelect } from '../index'
import * as yup from 'yup';

import { firestore } from '../../firebase/firebase.utils'
import { InputBase } from '@material-ui/core'

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

  const [isLoading, setLoading] = useState(false)
  const [options, setOptions] = useState(defaultOptions)

  const validationSchema = yup.object({
    activity: yup.string().required('A actitity name is required')
  })

  const formik = useFormik({
    initialValues: {
      activity: '',
      project: undefined,
      startDate: new Date(),
      endDate: new Date(),
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      /*     firestore.collection('activities').add({
          activity: activity,
          project: project.value,
          startDate: startDate,
          endDate: endDate
        }) */
    }
  });

  return (
    <Paper component="form" className={classes.root} onSubmit={formik.handleSubmit}>
      <TextField
        id='activity'
        autoComplete='off'
        className={classes.input}
        placeholder="What are you doing?"
        value={formik.values.activity}
        onChange={formik.handleChange}
        InputProps={{ disableUnderline: true }}
        error = {formik.touched.activity && Boolean(formik.errors.activity)}
        helperText={formik.touched.activity && formik.errors.activity}
        autoFocus
      />
      <ProjectSelect
        className={classes.select}
        isLoading={isLoading}
        setLoading={setLoading}
        options={options}
        setOptions={setOptions}
        value={formik.values.project}
        setFieldValue={formik.setFieldValue}
      />
      <TimeInput
        startDate={formik.values.startDate}
        setFieldValue={formik.setFieldValue}
        endDate={formik.values.endDate}
      />
      <IconButton color='secondary' type='submit'>
        <DoneIcon />
      </IconButton>
    </Paper>
  )
}

export default NewActivity
