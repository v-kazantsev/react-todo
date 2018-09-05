import React from 'react'

const TextInput = ({input, width, type, placeholder, meta: {touched, error}}) => {
	return(
		<input {...input} placeholder={placeholder} type={type} />
	)
}

export default TextInput