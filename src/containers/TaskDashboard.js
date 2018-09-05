import React from 'react'
import { connect } from 'react-redux'
import Task from 'components/Task'

const mapState = state => ({
	tasks: state.tasks
})

class TaskDashboard extends React.Component {
	render() {
		const {tasks} = this.props
		return (
			<ul>
				{tasks.map(task => <li key={task.id}>
					<Task
						title={task.title}
						description={task.description}
						importance={task.importance}
						deadline={task.date}
						id={task.id}
					/>
				</li>)}
			</ul>
		)
	}
}

export default connect(mapState)(TaskDashboard)