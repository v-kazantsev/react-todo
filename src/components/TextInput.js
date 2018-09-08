import React from 'react'
import { Label, Input }  from 'elements'

const TextInput = ({input, width, type, placeholder, meta: {touched, error}}) => {
	return(
		<div>
			<Input {...input} placeholder={placeholder} type={type} />
			<Label>Cannot be blank</Label>
		</div>
	)
}

export default TextInput