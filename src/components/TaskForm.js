import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import cuid from 'cuid'
import { createTask } from 'actions/taskActions'
import TextInput from './TextInput'

const mapState = state => {
	state.task
}

const actions ={ createTask }



let TaskForm = ({handleSubmit, createTask}) => {
	const onSubmit = (values) => {
		const id = cuid()
		values['id'] = id
		createTask(values)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor='title'>Title:</label>
				<Field name='title' component={TextInput} placeholder='Name your task' type='text' />
			</div>
			<div>
				<label htmlFor='description'>Description:</label>
				<Field name='description' component='input' type='text' />
			</div>
			<div>
				<label htmlFor='deadline'>Due to:</label>
				<Field name='deadline' component='input' type='date' />
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
			<button type='submit'>Add task</button>
		</form>)
}

TaskForm = reduxForm({
	form: 'task',
	enableReinitialize: true,
})(TaskForm)

export default connect(mapState, actions)(TaskForm)

