import React, { Component } from 'react'
import { Header } from 'elements'
import TaskDashboard  from 'containers/TaskDashboard'

class App extends Component {
	render() {
		return (
			<div className="container">
				<Header>
          ToDo List
				</Header>
				<TaskDashboard />
			</div>
		)
	}
}

export default App
