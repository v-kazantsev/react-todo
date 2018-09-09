import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { removeTask } from 'actions/taskActions'
import Toggle from '../Toggle'
import TaskForm from 'components/TaskForm'
import Modal from '../Modal'
import { Button } from 'elements'

const actions = {
	removeTask,
}

const Task = ({ title, description, importance, deadline, id, removeTask }) => {
	const checkDeadline = () => {
		let today = new Date()
		today = moment.utc(today.getDate(), 'DD-MM-YYYY').format()
		if (today > deadline) return true
	}
	const failed = checkDeadline()
	
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
        Due to: <span style={{color: failed && 'red'}}>{moment(deadline).format('DD-MM-YYYY')}</span>
			</div>
			<Toggle>
				{({on, toggle}) => (
					<Fragment>
						<Button onClick={toggle}>Edit</Button>
						<Modal on={on} toggle={toggle}>
							<TaskForm taskId={id}/>
						</Modal>
					</Fragment>
				)}
			</Toggle>
			<Button onClick={() => removeTask(id)}>Remove</Button>
		</Fragment>
	)
}

export default connect(null, actions)(Task)