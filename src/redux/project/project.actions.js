import { ProjectActionTypes } from './project.types'
import { firestore } from '../../firebase/firebase.utils'

export const getProjectsBegin = () => ({
  type: ProjectActionTypes.GET_PROJECTS_BEGIN,
  payload: []
})

export const getProjectsSuccess = projects => ({
  type: ProjectActionTypes.GET_PROJECTS_SUCCESS,
  payload: projects,
  error: null
})

export const getProjectsFailure = (err) => ({
  type: ProjectActionTypes.GET_PROJECTS_FAILURE,
  payload: err
})

export const getProjects = (uid) => {
  return async dispatch => {
    dispatch(getProjectsBegin())
    const result = []
    firestore.collection('projects').where('user_id', '==', `${uid}`).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const value = doc.data()
          value.id = doc.id
          result.push(value)
        });
      })
      .then(() => {
        const sortedResult = result.sort((a, b) => {
          if (a.value < b.value) return -1
          if (a.value > b.value) return 1
          return 0
        })
        console.log(result)
        dispatch(getProjectsSuccess(sortedResult))
      })
      .catch((err) => dispatch(getProjectsFailure(err)))
  }
}
