/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'
import { Paper, makeStyles } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { connect } from 'react-redux'
import moment from 'moment'

import { addNewActivity, getActivities } from '../../redux/activity/activity.actions'
import { getProjects } from '../../redux/project/project.actions'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '85vh',
    width: '100%',

    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  paper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    outline: 'none',
    overflowY: 'auto',
  }
}))

const columns = [
  { field: 'activity', headerName: 'Activity', width: 200 },
  { field: 'project', headerName: 'Project', width: 130 },
  { field: 'timespan', headerName: 'Timespan', width: 130 },
  { field: 'date', headerName: 'Date', width: 130 },
  { field: 'duration', headerName: 'Duration', width: 110 },
];

const ActivityTable = ({ projects, getActivities, activities, loading }) => {
  const classes = useStyles()

  useEffect(() => {
    if (projects.length > 0) {
      getActivities(projects)
    }
  }, [])

  const getTimespanFormat = (start, end) => {
    if (start instanceof Date || end instanceof Date) {
      return `${moment(start).format('HH:mm')} - ${moment(end).format('HH:mm')}`
    }
    const startTime = moment(start.toDate()).format('HH:mm')
    const endTime = moment(end.toDate()).format('HH:mm')
    return `${startTime} - ${endTime}`
  }

  // TODO: Handle events spanning several days
  const getDuration = (start, end) => {
    if (start instanceof Date || end instanceof Date) {
      return moment(moment(end).diff(moment(start))).format('HH:MM')
    }
    const startTime = moment(start.toDate());
    const endTime = moment(end.toDate());
    const diffTime = moment(endTime.diff(startTime)).format('HH:MM')
    return diffTime
  }

  const getYear = (date) => {
    if (date instanceof Date) {
      return moment(date).format('Do MMM Y')
    }
    return moment(date.toDate()).format('Do MMM Y')
  }

  const sortedActivities = activities.sort((a, b) => {
    if (a.startDate instanceof Date || b.startDate instanceof Date) {
      return moment(a.startDate).isAfter(moment(b.startDate)) ? 1 : -1
    }
    const startTime = moment(a.startDate.toDate());
    const endTime = moment(b.startDate.toDate());
    return startTime.isAfter(endTime) ? 1 : -1
  })

  const rows = sortedActivities.map((entry) => {
    return {
      id: entry.id,
      activity: entry.activity,
      project: entry.project,
      timespan: getTimespanFormat(entry.startDate, entry.endDate),
      date: getYear(entry.startDate),
      duration: getDuration(entry.startDate, entry.endDate)
    }
  })
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} component='div'>
        <Table style={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: '12rem' }}>Activity</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Timespan</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Length</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              sortedActivities.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.activity}</TableCell>
                  <TableCell>{row.project}</TableCell>
                  <TableCell>{getTimespanFormat(row.startDate, row.endDate)}</TableCell>
                  <TableCell>{getYear(row.startDate)}</TableCell>
                  <TableCell>{getDuration(row.startDate, row.endDate)}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
        {/* <DataGrid rows={rows} columns={columns} pageSize={20} /> */}
      </Paper>
    </div>
  )
}

const mapStateToProps = ({ user, activities, projects }) => ({
  currentUser: user.currentUser,
  loading: activities.loading,
  activities: activities.activities,
  projects: projects.projects
})

const mapDispatchToProps = (dispatch) => ({
  addNewActivity: activity => dispatch(addNewActivity(activity)),
  getActivities: (projects) => dispatch(getActivities(projects)),
  getProjects: (uid) => dispatch(getProjects(uid))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivityTable)
