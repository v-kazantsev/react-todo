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
  state = {
    option: 'all'
  }
  handleChange = (event) => (
    this.setState({
      option: event.target.value
    })
  )
	render() {
    let {tasks} = this.props
    if (this.state.option !== 'all') {
      tasks = tasks.filter(task => task.importance === this.state.option)
    }
		return (
			<Fragment>
        <div>
          All<input type='radio' value='all' onChange={this.handleChange} checked={this.state.option === 'all'} />
          Ordinary<input type='radio' value='ordinary' onChange={this.handleChange} checked={this.state.option === 'ordinary'} />
          Important<input type='radio' value='important' onChange={this.handleChange} checked={this.state.option === 'high'} />
          Very important<input type='radio' value='very high' onChange={this.handleChange} checked={this.state.option === 'very high'} />
        </div>
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