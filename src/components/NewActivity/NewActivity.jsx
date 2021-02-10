import React from 'react'
import { Formik, Form } from 'formik'
import { TextField, Select, Button, Container, Grid, makeStyles, MenuItem, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(0, 2, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(1, 2, 2)
  },
  select: {
    margin: theme.spacing(2, 0, 2),
    minWidth: '8rem'
  },
  activity: {

  }
}))

const NewActivity = (props) => {
  const classes = useStyles()
  const options = ['', 'TDDD96', 'TDDD60', 'TSRT12']

  return (
    <Container>
      <Paper elevation={3} className={classes.paper}>
        <Grid container wrap='wrap'>
          <Formik
            initialValues={{
              activity: '',
              project: '',
              time: '00:00'
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2))
            }}
          >
            {({ values, handleChange }) =>
              <Form className={classes.form}>
                <Grid item flexGrow={1}>
                  <TextField
                    label='Activity'
                    name='activity'
                    className={classes.activity}
                    value={values.activity}
                    onChange={handleChange}
                    style={{ flexGrow: 1 }}
                  />
                  {/*                 <TextField
                  label='Time'
                  type='time'
                  name='time'
                  value={values.time}
                  onChange={handleChange}
                />
                <Select
                  displayEmpty
                  label='Project'
                  name='project'
                  value={values.project}
                  onChange={handleChange}
                  className={classes.select}
                >
                  {options.map((option) => {
                    return (<MenuItem id={option} name={option} value={option} key={option}>{option}</MenuItem>)
                  })}
                </Select>
                <Button variant='contained' type='submit' color='primary' className={classes.submit}>
                  Add
                </Button> */}
                </Grid>
              </Form>}
          </Formik>
        </Grid>
      </Paper>
    </Container>
  )
}

export default NewActivity
