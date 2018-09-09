import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import taskReducer from './taskReducer'

const rootReducer = combineReducers({
	tasks: taskReducer,
	form: formReducer
})

export default rootReducer