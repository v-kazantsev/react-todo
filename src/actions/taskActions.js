import { TASK_CREATED, TASK_UPDATED, TASK_REMOVED } from 'constants/taskConstants'

export const createTask = (task) => {
	return {
		type: TASK_CREATED,
		payload: {task}
	}
}

export const updateTask = (task) => {
	return {
		type: TASK_UPDATED,
		payload: {task}
	}
}

export const removeTask = (taskId) => {
	return {
		type: TASK_REMOVED,
		payload: {taskId}
	}
}