import { TASK_CREATED, TASK_UPDATED, TASK_REMOVED } from 'constants/taskConstants'
import createReducer from 'utils/createReducer'

const initialState = [
	{
		id: '1',
		title: 'Try new dark beer',
		description: 'Some not very long description here.',
		date: '2018-08-29',
		importance: 'ordinary'
	},
	{
		id: '2',
		title: 'Watch new movie',
		description: 'Some not very long description here.',
		date: '2018-08-28',
		importance: 'high'
	},
	{
		id: '3',
		title: 'Apply for a new job',
		description: 'Some not very long description here.',
		date: '2018-09-01',
		importance: 'very high'
	},
]

export const createTask = (state, payload) => [...state, payload.task]

export const updateTask = (state, payload) => {
	return state.map(task => {
		if (task.id !== payload.taskId) {
			return task
		}
		return {
			...task,
			...payload.task
		}    
	})
}

export const removeTask = (state, payload) => [...state.filter(task => task.id !== payload.taskId)]

export default createReducer(initialState, {
	[TASK_CREATED]: createTask,
	[TASK_UPDATED]: updateTask,
	[TASK_REMOVED]: removeTask,
})