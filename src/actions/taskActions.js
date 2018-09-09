import { TASK_CREATED, TASK_UPDATED, TASK_REMOVED, LOAD } from 'constants/taskConstants'

export const createTask = task => {
	return {
		type: TASK_CREATED,
		payload: {task}
	}
}

export const updateTask = task => {
	return {
		type: TASK_UPDATED,
		payload: {task}
	}
}

export const removeTask = taskId => {
	return {
		type: TASK_REMOVED,
		payload: {taskId}
	}
}

export const loadTask = () => {
	return {
		type: LOAD,
	}
}