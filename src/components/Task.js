import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { updateTask, removeTask } from 'actions/taskActions'
import Toggle from '../Toggle'
import TaskForm from 'components/TaskForm'
import Modal from '../Modal'
import { Button } from 'elements'

const actions = {
	updateTask,
	removeTask
}

const Task = ({ title, description, importance, deadline, id, updateTask, removeTask }) => {
	return (
		<Fragment>
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
			<Toggle>
				{({on, toggle}) => (
					<Fragment>
						<Button onClick={toggle}>Edit</Button>
						<Modal on={on} toggle={toggle}>
							<TaskForm />
						</Modal>
					</Fragment>
				)}
			</Toggle>
			<Button onClick={() => removeTask(id)}>Remove</Button>
		</Fragment>
	)
}

export default connect(null, actions)(Task)