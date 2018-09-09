import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import lscache from 'lscache'
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
  
  componentDidUpdate = () => {
    if (!lscache.supported()) {
      alert('Local storage is unsupported in this browser');
      return;
    }
    lscache.remove('storedTasks')
    lscache.set('storedTasks', this.props.tasks, 60)
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
          All<input type='radio' value='all' onChange={this.handleChange} checked={this.state.option === 'all'} style={{marginRight: 8}} />
          Ordinary<input type='radio' value='ordinary' onChange={this.handleChange} checked={this.state.option === 'ordinary'} style={{marginRight: 8}} />
          Important<input type='radio' value='important' onChange={this.handleChange} checked={this.state.option === 'important'} style={{marginRight: 8}} />
          Very important<input type='radio' value='very important' onChange={this.handleChange} checked={this.state.option === 'very important'} />
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