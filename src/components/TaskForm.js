import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import cuid from 'cuid'
import moment from 'moment'
import { combineValidators, isRequired } from 'revalidate'
import { createTask, updateTask } from 'actions/taskActions'
import TextInput from './TextInput'
import DateInput from './DateInput'
import { Button } from 'elements'

const mapState = (state, ownProps) => {
	const {taskId} = ownProps
	if (taskId) {
		const data = state.tasks.filter(task => task.id === taskId)
		return {
			initialValues: data[0]
		}
	} else {
		let today = new Date()
		today = today.getDate()
		return {
			initialValues: {    
				importance: 'ordinary',
				deadline: moment.utc(today, 'DD-MM-YYYY').format()
			}
		}
	}
}

const actions = {
	createTask,
	updateTask
}

const validate = combineValidators( {
	title: isRequired({message: 'Title is required' }),
	description: isRequired({message: 'Descriptopn is required'}),
})

class TaskForm extends Component {

  
	render() {
		const { handleSubmit, updateTask, createTask, taskId  } = this.props
		const onSubmit = values => {
			if (taskId) {
				updateTask(values, taskId)
			} else {
				values.deadline = moment.utc(values.deadline, 'DD-MM-YYYY').format()
				const id = cuid()
				values['id'] = id
				values['completed'] = false
				createTask(values)
			}
		}
		return (
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<Field name='title' component={TextInput} type='text' placeholder={'Title:'} />
				</div>
				<div>
					<Field name='description' component={TextInput} type='text' placeholder={'Description:'} />
				</div>
				<div>
					<Field name='deadline' component={DateInput} type='text' />
				</div>
				<div>
					<label>Importance: </label>
					<span>
						<label>
							<Field name='importance' component='input' type='radio' value='ordinary' />{' '}Ordinary
						</label>
					</span>
					<span>
						<label>
							<Field name='importance' component='input' type='radio' value='important' />{' '}Important
						</label>
					</span>
					<span>
						<label>
							<Field name='importance' component='input' type='radio' value='very important' />{' '}Very important
						</label>
					</span>
				</div>
				<Button float type='submit'>{this.props.action === 'edit' ? 'Edit task' : 'Add task'}</Button>
			</form>
		)
	}
}

TaskForm = reduxForm({
	form: 'task',
	validate,
	enableReinitialize: true,
})(TaskForm)

export default connect(mapState, actions)(TaskForm)