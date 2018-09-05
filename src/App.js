import React, { Component } from 'react'
import { Header, Button } from 'elements'
import Toggle from './Toggle'
import Modal from './Modal'
import TaskDashboard from 'containers/TaskDashboard'
import TaskForm from 'components/TaskForm'

class App extends Component {
	render() {
		return (
			<div className="container">
				<Header>
          ToDo List
				</Header>
				<TaskDashboard />
				<Toggle>
					{({on, toggle}) => (
						<React.Fragment>
							<Button rounded large onClick={toggle}>+</Button>
							<Modal on={on} toggle={toggle}>
								<TaskForm />
							</Modal>
						</React.Fragment>
					)}
				</Toggle>
			</div>
		)
	}
}

export default App
