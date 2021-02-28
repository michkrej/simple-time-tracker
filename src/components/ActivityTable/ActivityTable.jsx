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

import { addNewActivity, getActivities } from '../../redux/activity/activity.actions'
import { getProjects } from '../../redux/project/project.actions'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  paper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    outline: 'none'
  }
}))

const columns = [
  { field: 'activity', headerName: 'Activity', width: 200 },
  { field: 'project', headerName: 'Project', width: 130 },
  { field: 'startDate', headerName: 'Start Time', width: 130 },
  { field: 'endDate', headerName: 'End Time', width: 130 },
  // { field: 'length', headerName: 'Length', width: 130 },
  /*   {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`
    } */
];

/* const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
] */

const test = [
  { id: '123', activity: 'Testing', startDate: 1614455727 }
]

const ActivityTable = ({ projects, getActivities, activities, loading }) => {
  const classes = useStyles()

  const [test, setTest] = useState(false)
  useEffect(() => {
    if (projects.length > 0) {
      getActivities(projects)
      setTest(true)
    }
  }, [projects, getActivities])

  // eslint-disable-next-line no-unused-expressions
  !loading ? console.log(activities) : ''

  console.log(loading)
  const table = (<Table>
    <TableHead>
      <TableRow>
        <TableCell>Activity</TableCell>
        <TableCell>Project</TableCell>
        <TableCell>Start</TableCell>
        <TableCell>End</TableCell>
        <TableCell>Length</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {
        activities ? activities.map(row => (
          // eslint-disable-next-line react/jsx-key
          <TableRow key={row.id}>{row.activity}</TableRow>
        )) : ''
      }
    </TableBody>
  </Table>)
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} component='div'>
        <div key={test}>{loading ? 'Nothing here' : console.log(activities)}</div>
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
