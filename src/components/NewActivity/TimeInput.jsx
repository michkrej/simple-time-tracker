import React from 'react'
import PropTypes from 'prop-types'

import { KeyboardDateTimePicker, KeyboardTimePicker } from '@material-ui/pickers'
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

const TimeInput = ({ startDate, setFieldValue, endDate }) => {
  const classes = useStyles()

  const isToday = (date) => {
    const currentDate = new Date()
    if (date._isAMomentObject) {
      return date._d.getDate() === currentDate.getDate() && date._d.getMonth() === currentDate.getMonth()
    }
    return date.getDate() === currentDate.getDate() && date.getMonth() === currentDate.getMonth()
  }

  // TODO: Use normal inputs and parse it to Date objects
  return (
    <div className={classes.root}>
      <KeyboardDateTimePicker
        id='startDate'
        ampm={false}
        allowKeyboardControl={true}
        value={startDate}
        inputVariant='outlined'
        variant='dialog'
        showTodayButton
        format={isToday(startDate) ? 'HH:mm [Today]' : 'HH:mm  MM/DD'}
        className={`${classes.startDate} ${classes.timeInput}`}
        onChange={value => setFieldValue('startDate', value ? value.toDate() : '')}
      />
      <ArrowRightAltIcon />
      <KeyboardTimePicker
        id='endDate'
        ampm={false}
        value={endDate}
        placeholder={'00:00'}
        onChange={value => setFieldValue('endDate', value ? value.toDate() : '') }
        inputVariant='outlined'
        showTodayButton
        className={`${classes.endDate} ${classes.timeInput}`}
      />
    </div>
  )
}

TimeInput.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
}

export default TimeInput
