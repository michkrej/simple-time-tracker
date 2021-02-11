import React, { useState } from 'react'
import { KeyboardDateTimePicker } from '@material-ui/pickers'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  startDate: {
    width: '10.9rem',
    margin: theme.spacing(1)
  },
  endDate: {
    width: '7.75rem',
    margin: theme.spacing(1)
  }
}))

const TimeInput = () => {
  const classes = useStyles()
  const [startDate, handleStartDateChange] = useState(new Date())
  const [endDate, handleEndDateChange] = useState(new Date())

  const isToday = (date) => {
    const currentDate = new Date()
    if (date._isAMomentObject) {
      return date._d.getDate() === currentDate.getDate() && date._d.getMonth() === currentDate.getMonth()
    }
    return date.getDate() === currentDate.getDate() && date.getMonth() === currentDate.getMonth()
  }

  return (
    <div>
    <KeyboardDateTimePicker
      autoOk
      ampm={false}
      allowKeyboardControl={true}
      value={startDate}
      onChange={handleStartDateChange}
      inputVariant='outlined'
      variant="dialog"
      showTodayButton
      format={isToday(startDate) ? 'HH:mm [Today]' : 'HH:mm  MM/DD'}
      className={classes.startDate}
    />
    <KeyboardDateTimePicker
      autoOk
      ampm={false}
      allowKeyboardControl={true}
      value={endDate}
      onChange={handleEndDateChange}
      inputVariant='outlined'
      variant="dialog"
      showTodayButton
      format={'HH:mm'}
      className={classes.endDate}
    />
    </div>
  )
}

export default TimeInput
