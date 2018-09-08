import React from 'react'
import Portal from './Portal'
import { Wrapper, ModalCard } from 'elements'

class Modal extends React.Component {
	render() {
		const {children, toggle, on} = this.props
		return(
			<Portal>
				{on && (
					<Wrapper>
						<ModalCard>
							<button className='close-button' onClick={toggle}>X</button>
							<div>{children}</div>
						</ModalCard>
					</Wrapper>
				)}
			</Portal>
		)
	}
}

export default Modal