/* import { TextField } from '@rmwc/textfield'
import { Select } from '@rmwc/select'
import { Button } from '@rmwc/button' */
import { useFormik, Formik, Form } from 'formik'
import { TextField, NativeSelect, Button, withStyles } from '@material-ui/core'

import './NewActivity.scss'

const NewActivity = (props) => {
  const { isMobile } = props
  const options = ["", "TDDD96", "TDDD60", "TSRT12"]

  return (
    <Formik
      initialValues={{
        activity: '',
        project: '',
        time: '00:00',
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values, handleChange }) =>
        <Form className="container">
          <TextField
            label="Activity"
            name="activity"
            className={'activity'}
            value={values.activity}
            onChange={handleChange}
          />
          <TextField
            label="Time"
            type="time"
            name="time"
            value={values.time}
            onChange={handleChange}
          />
          <NativeSelect
            label="Project"
            name="project"
            value={values.project}
            onChange={handleChange}
          >
            {options.map((option) => {
              return (<option id={option} name={option} value={option} key={option}>{option}</option>)
            })}
          </NativeSelect>
          <Button variant="contained" type="submit" color="primary">
            Add
          </Button>
        </Form>}
    </Formik>
  );
}

export default NewActivity