import { ActivityActionTypes } from './activity.types'

const INITIAL_STATE = {
  newActivity: null
}

const activityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActivityActionTypes.ADD_ACTIVITY:
      return {
        ...state,
        newActivity: action.payload
      }
    default:
      return state
  }
}

export default activityReducer
