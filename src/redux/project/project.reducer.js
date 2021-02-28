import { ProjectActionTypes } from './project.types'
import { getProjects } from './project.utils'

const INITIAL_STATE = {
  projects: []
}

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectActionTypes.GET_PROJECTS_BEGIN:
      return {
        ...state
      }
    case ProjectActionTypes.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload
      }
    case ProjectActionTypes.GET_PROJECTS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default projectReducer
