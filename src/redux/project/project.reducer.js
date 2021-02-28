import { GET_PROJECTS } from './project.types'

const INITIAL_STATE = {
  projects: []
}

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PROJECTS.BEGIN:
      return {
        ...state
      }
    case GET_PROJECTS.SUCCESS:
      return {
        ...state,
        projects: action.payload
      }
    case GET_PROJECTS.FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default projectReducer
