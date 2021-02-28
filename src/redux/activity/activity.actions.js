import { ActivityActionTypes, GET_ACTIVITIES } from './activity.types'
import { firestore } from '../../firebase/firebase.utils'

export const addNewActivity = activity => ({
  type: ActivityActionTypes.ADD_ACTIVITY,
  payload: activity
})

export const getActivitiesBegin = () => ({
  type: GET_ACTIVITIES.BEGIN,
  payload: []
})

export const getActivitiesSuccess = (activities) => ({
  type: GET_ACTIVITIES.SUCCESS,
  payload: activities,
  error: null
})

export const getActivitiesFailure = (err) => ({
  type: GET_ACTIVITIES.FAILURE,
  payload: err
})

export const getActivities = (projects) => {
  return async dispatch => {
    dispatch(getActivitiesBegin())
    const activities = []
    const projectIDs = projects.map(project => {
      return project.id
    })
    console.log(`${projectIDs}`)
    firestore.collection('activities').where('project_id', 'in', projectIDs).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const value = doc.data()
          value.id = doc.id
          activities.push(value)
        });
      })
      .then(dispatch(getActivitiesSuccess(activities)))
      .catch(err => dispatch(getActivitiesFailure(err)))
  }
}
