import lscache from 'lscache'
import { TASK_CREATED, TASK_UPDATED, TASK_REMOVED, TASK_TOGGLED } from 'constants/taskConstants'
import createReducer from 'utils/createReducer'

const testData = [
	{
		id: '1',
		title: 'Try new dark beer',
		description: 'Some not very long description here.',
		date: '29-08-2018',
		importance: 'ordinary'
	},
	{
		id: '2',
		title: 'Watch new movie',
		description: 'Some not very long description here.',
		date: '29-08-2018',
		importance: 'important'
	},
	{
		id: '3',
		title: 'Apply for a new job',
		description: 'Some not very long description here.',
		date: '29-08-2018',
		importance: 'very important'
	},
]

const initialState = lscache.get('storedTasks') || testData

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

export const toggleTask = (state, payload) => {
	return state.map(task => {
		if (task.id !== payload.taskId) {
			return task
		}
		return {
			...task, 
			completed: !task.completed,
		}    
	})
}

export default createReducer(initialState, {
	[TASK_CREATED]: createTask,
	[TASK_UPDATED]: updateTask,
	[TASK_REMOVED]: removeTask,
	[TASK_TOGGLED]: toggleTask,
})