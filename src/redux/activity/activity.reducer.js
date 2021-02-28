import { ActivityActionTypes } from './activity.types'
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
    default:
      return state
  }
}

export default activityReducer
