import React from 'react';

class ToDoList extends React.Component {
  render() {
    let todos = this.props.todos.map((item, i) => (<Todo key={i} task={item.taskText} status={item.completed} />))
    return (
      <ul>{todos}</ul>
    )
  }
}

export default ToDoList;
