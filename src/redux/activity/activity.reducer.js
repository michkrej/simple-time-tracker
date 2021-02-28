import { ActivityActionTypes, GET_ACTIVITIES } from './activity.types'
import { addActivity } from './activity.utils'

const INITIAL_STATE = {
  activities: []
}

const activityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActivityActionTypes.ADD_ACTIVITY:
      return {
        ...state,
        activities: addActivity(state.activities, action.payload)
      }
    case GET_ACTIVITIES.BEGIN:
      return {
        ...state
      }
    case GET_ACTIVITIES.SUCCESS:
      return {
        ...state,
        activities: action.payload
      }
    case GET_ACTIVITIES.FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default activityReducer
