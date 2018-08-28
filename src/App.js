import React, { Component } from 'react';
import { Header, Button } from 'elements';
import Portal from './Portal';
import Toggle from './Toggle';
import Modal from './Modal';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header>
          ToDo List
        </Header>
        <Toggle>
          {({on, toggle}) => (
            <React.Fragment>
              <Button rounded large onClick={toggle}>+</Button>
              <Modal on={on} toggle={toggle}>
                <h1>Still in a modal</h1>
              </Modal>
            </React.Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
