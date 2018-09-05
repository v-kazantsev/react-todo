import React from 'react'
import { connect } from 'react-redux'
import { updateTask, removeTask } from 'actions/taskActions'

const actions = {
	updateTask,
	removeTask
}

const Task = ({ title, description, importance, deadline, id, updateTask, removeTask }) => {
	return (
		<React.Fragment>
			<div>
        Title: {title}
			</div>
			<div>
        Description: {description}
			</div>
			<div>
        Importance: {importance}
			</div>
			<div>
        Due to: {deadline}
			</div>
			<button onClick={() => updateTask(id)}>Edit</button>
			<button onClick={() => removeTask(id)}>Remove</button>
		</React.Fragment>
	)
}

export default connect(null, actions)(Task)