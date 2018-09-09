import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { removeTask, toggleTask } from 'actions/taskActions'
import Toggle from 'utils/Toggle'
import TaskForm from 'components/TaskForm'
import Modal from '../Modal'
import { Button } from 'elements'

const mapState = state => {
	return {
		tasks: state.tasks
	}
}

const actions = {
	removeTask,
	toggleTask,
}

const Task = ({ title, description, importance, deadline, id, removeTask, toggleTask, tasks }) => {

	const completed = tasks && tasks.filter(task => task.id === id)[0].completed

	const checkDeadline = () => {
		let today = new Date()
		today = moment.utc(today.getDate(), 'DD-MM-YYYY').format()
		if (today > deadline) return true
	}	
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
        Due to: <span style={{color: checkDeadline() && 'red'}}>{moment(deadline).format('DD-MM-YYYY')}</span>
			</div>
			<div>
			</div>
			<Toggle>
				{({on, toggle}) => (
					<Fragment>
						<Button onClick={toggle}>Edit</Button>
						<Modal on={on} toggle={toggle}>
							<TaskForm taskId={id} action={'edit'}/>
						</Modal>
					</Fragment>
				)}
			</Toggle>
			<Button onClick={() => removeTask(id)}>Remove</Button>
			<Button onClick={() => toggleTask(id)}>Toggle</Button>
			{completed && <span style={{color: 'violet'}}>Task completed</span>}
		</Fragment>
	)
}

export default connect(mapState, actions)(Task)