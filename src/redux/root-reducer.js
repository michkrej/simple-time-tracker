import { combineReducers } from 'redux'
import activityReducer from './activity/activity.reducer'
import projectReducer from './project/project.reducer'
import userReducer from './user/user.reducer'

export default combineReducers({
  user: userReducer,
  activities: activityReducer,
  projects: projectReducer
})
