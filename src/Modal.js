import React from 'react';
import Portal from './Portal';
import { Wrapper, ModalCard } from 'elements';

class Modal extends React.Component {
  render() {
    const {children, toggle, on} = this.props;
    return(
      <Portal>
        {on && (
        <Wrapper onClick={toggle}>
          <ModalCard>
            <button onClick={toggle}>Close</button>
            <div>{children}</div>
          </ModalCard>
        </Wrapper>
        )}
      </Portal>
    )
  }
};

export default Modal;