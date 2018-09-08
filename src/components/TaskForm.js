import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import cuid from 'cuid'
import moment from 'moment'
import { createTask } from 'actions/taskActions'
import TextInput from './TextInput'
import DateInput from './DateInput'
import Button from 'elements/Button'


const actions ={ createTask }



let TaskForm = ({handleSubmit, createTask}) => {
	const onSubmit = (values) => {
		values.deadline = moment.utc(values.deadline, 'DD/MM/YYYY').format('DD/MM/YYYY')
		const id = cuid()
		values['id'] = id
		createTask(values)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor='title'>Title:</label>
				<Field name='title' component={TextInput} type='text' />
			</div>
			<div>
				<label htmlFor='description'>Description:</label>
				<Field name='description' component={TextInput} type='text' />
			</div>
			<div>
				<label htmlFor='deadline'>Due to:</label>
				<Field name='deadline' component={DateInput} type='date' />
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
			<Button float type='submit'>Add task</Button>
		</form>)
}

TaskForm = reduxForm({
	form: 'task',
	enableReinitialize: true,
})(TaskForm)

export default connect(null, actions)(TaskForm)

