import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Task from 'components/Task'
import TaskForm from 'components/TaskForm'
import Toggle from '../Toggle'
import Modal from '../Modal'
import { Button } from 'elements'

const mapState = state => ({
	tasks: state.tasks
})

class TaskDashboard extends Component {
	render() {
		const {tasks} = this.props
		return (
			<Fragment>
				<ul>
					{tasks.map(task => <li key={task.id}>
						<Task
							title={task.title}
							description={task.description}
							importance={task.importance}
							deadline={task.deadline}
							id={task.id}
						/>
					</li>)}
				</ul>
				<Toggle>
					{({on, toggle}) => (
						<Fragment>
							<Button rounded large onClick={toggle} style={{marginTop: 0}}>+</Button>
							<Modal on={on} toggle={toggle}>
								<TaskForm />
							</Modal>
						</Fragment>
					)}
				</Toggle>
			</Fragment>
		)
	}
}

export default connect(mapState)(TaskDashboard)