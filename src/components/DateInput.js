import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

const DateInput = ({input: { value, onChange, restInput }, ...rest}) => {
	return (
		<DatePicker
			{...rest}
			dateFormat="DD-MM-YYYY"
			selected={value ? moment(value) : null}
			onChange={onChange}
			{...restInput}
		/>
	)
}

export default DateInput