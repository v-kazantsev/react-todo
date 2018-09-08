import React from 'react'
import Portal from './Portal'
import { Wrapper, ModalCard, Background } from 'elements'

class Modal extends React.Component {
	render() {
		const {children, toggle, on} = this.props
		return(
			<Portal>
				{on && (
					<Wrapper>
						<ModalCard>
							<button className='close-button' onClick={toggle}>{String.fromCharCode(9587)}</button>
							<div>{children}</div>
						</ModalCard>
						<Background />
					</Wrapper>
				)}
			</Portal>
		)
	}
}

export default Modal