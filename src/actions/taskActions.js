import { TASK_CREATED, TASK_UPDATED, TASK_REMOVED } from 'constants/taskConstants'

export const createTask = task => {
	return {
		type: TASK_CREATED,
		payload: {task}
	}
}

export const updateTask = (task, taskId) => {
	return {
		type: TASK_UPDATED,
		payload: {task, taskId}
	}
}

export const removeTask = taskId => {
	return {
		type: TASK_REMOVED,
		payload: {taskId}
	}
}