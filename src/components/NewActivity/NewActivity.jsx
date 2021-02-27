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
import { InputBase } from '@material-ui/core'
import { connect } from 'react-redux'
import { setCurrentUser } from '../../redux/user/user.actions'

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


const NewActivity = ({ currentUser, setCurrentUser }) => {
  const classes = useStyles()

  const [isLoading, setLoading] = useState(false)
  const [projects, setProjects] = useState([])

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
      setProjects([...projects, newOption])
      formik.setFieldValue('project', newOption)
    }, 500)
  }

  const fetchProjects = async () => {
    if (currentUser) {
      const result = []
      firestore.collection('projects').where('user_id', '==', `${currentUser.id}`).get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const value = doc.data()
            value.id = doc.id
            result.push(value)
          });
        })
        .then(() => setProjects(result))
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [currentUser])

  console.log(projects)
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewActivity)
