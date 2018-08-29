import React from 'react';
import { connect } from 'react-redux';

const mapState = state => ({tasks: state.tasks})

class TaskDashboard extends React.Component {
  render() {
    const {tasks} = this.props;
    return (
    <ul>
      {tasks.map(task => <li key={task.id}>{task.title}</li>)}
    </ul>
    )
  }
};

export default connect(mapState)(TaskDashboard);