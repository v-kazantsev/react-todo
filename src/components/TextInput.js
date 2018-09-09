import React from 'react'
import { Label, Input }  from 'elements'

const TextInput = ({input, width, type, placeholder, meta: {touched, error}}) => {
	return(
		<div>
			<Input {...input} placeholder={placeholder} type={type} />
			{touched && error && <Label>{error}</Label>}
		</div>
	)
}

export default TextInput