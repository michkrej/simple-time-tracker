import React from 'react'
import PropTypes from 'prop-types'

import { KeyboardDateTimePicker } from '@material-ui/pickers'
import { makeStyles } from '@material-ui/core/styles'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

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
        padding: theme.spacing(0, 1.2, 0, 0)
      },
      '& .MuiInputBase-input': {
        padding: theme.spacing(1.2, 0, 1.2, 1.2)
      }
    }
  },
  startDate: {
    width: '8.8rem'
  },
  endDate: {
    width: '5.8rem'
  }
}))

const TimeInput = ({ startDate, handleStartDateChange, endDate, handleEndDateChange }) => {
  const classes = useStyles()

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

TimeInput.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  handleStartDateChange: PropTypes.func.isRequired,
  handleEndDateChange: PropTypes.func.isRequired
}

export default TimeInput
