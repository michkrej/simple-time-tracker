import { ActivityActionTypes } from './activity.types'

export const addNewActivity = activity => ({
  type: ActivityActionTypes.ADD_ACTIVITY,
  payload: activity
})
