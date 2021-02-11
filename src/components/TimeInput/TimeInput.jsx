import React, { useState } from 'react'
import { KeyboardDateTimePicker } from '@material-ui/pickers'
import { makeStyles } from '@material-ui/core/styles'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import { findByLabelText } from '@testing-library/react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  timeInput: {
    margin: theme.spacing(1),
    '& .MuiInputBase-root': {
      padding: 0,
      '& .MuiButtonBase-root': {
        padding: theme.spacing(0, 1, 0, 0)
      },
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 0, 1, 1)
      }
    }
  },
  startDate: {
    width: '8.7rem'
  },
  endDate: {
    width: '5.5rem'
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
    <div className={classes.root}>
    <KeyboardDateTimePicker
      autoOk
      ampm={false}
      allowKeyboardControl={true}
      value={startDate}
      onChange={handleStartDateChange}
      inputVariant='outlined'
      variant='dialog'
      showTodayButton
      format={isToday(startDate) ? 'HH:mm [Today]' : 'HH:mm  MM/DD'}
      className={`${classes.startDate} ${classes.timeInput}`}
    />
    <ArrowRightAltIcon/>
    <KeyboardDateTimePicker
      autoOk
      ampm={false}
      allowKeyboardControl={true}
      value={endDate}
      onChange={handleEndDateChange}
      inputVariant='outlined'
      variant='dialog'
      showTodayButton
      format={'HH:mm'}
      className={`${classes.endDate} ${classes.timeInput}`}
    />
    </div>
  )
}

export default TimeInput
