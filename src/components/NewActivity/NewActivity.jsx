import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import DoneIcon from '@material-ui/icons/Done';
import { useFormik } from 'formik'
import { TimeInput, ProjectSelect } from '../index'
import * as yup from 'yup';

import { firestore } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { addNewActivity, getActivities } from '../../redux/activity/activity.actions'
import { getProjects } from '../../redux/project/project.actions'

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

const NewActivity = ({ currentUser, addNewActivity, activities, getProjects, projects, getActivities }) => {
  const classes = useStyles()

  const [isLoading, setLoading] = useState(false)
  const validationSchema = yup.object({
    activity: yup.string().required('A actitity name is required')
  })

  const formik = useFormik({
    initialValues: {
      activity: '',
      project: undefined,
      startDate: new Date(),
      endDate: new Date()
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      firestore.collection('activities').add({
        activity: values.activity,
        startDate: values.startDate,
        endDate: values.endDate,
        project_id: values.project.id
      })

      addNewActivity({ activity: values.activity, startDate: values.startDate, endDate: values.endDate, projectId: values.project.id })
    }
  });

  const handleCreate = (inputValue) => {
    setLoading(true)
    setTimeout(() => {
      const newOption = createOption(inputValue)
      firestore.collection('projects').add({
        label: newOption.label,
        value: newOption.value,
        user_id: currentUser.id
      })
      setLoading(false)
      projects = [...projects, newOption]
      formik.setFieldValue('project', newOption)
    }, 500)
  }

  useEffect(() => {
    if (currentUser) {
      getProjects(currentUser.id)
    }
  }, [currentUser])

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
        error={formik.touched.activity && Boolean(formik.errors.activity)}
        helperText={formik.touched.activity && formik.errors.activity}
        autoFocus
      />
      <ProjectSelect
        className={classes.select}
        isLoading={isLoading}
        options={projects}
        value={formik.values.project}
        handleCreate={handleCreate}
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

const mapStateToProps = ({ user, activities, projects }) => ({
  currentUser: user.currentUser,
  activities: activities,
  projects: projects.projects
})

const mapDispatchToProps = (dispatch) => ({
  addNewActivity: activity => dispatch(addNewActivity(activity)),
  getActivities: (projects) => dispatch(getActivities(projects)),
  getProjects: (uid) => dispatch(getProjects(uid))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewActivity)
