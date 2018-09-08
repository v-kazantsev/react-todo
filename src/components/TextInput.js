import React from 'react'
import Label from 'elements/Label'

const TextInput = ({input, width, type, placeholder, meta: {touched, error}}) => {
	return(
		<div>
			<input {...input} placeholder={placeholder} type={type} />
			<Label>Cannot be blank</Label>
		</div>
	)
}

export default TextInput