import React from 'react';
import Todo from './Todo';

class ToDoList extends React.Component {
  render() {
    let todos = this.props.todos.map((item, i) => (
      <Todo key={item._id} task={item.taskText} status={item.completed} xClick={() => (this.props.todoXClick(item._id))} toggleClick={() => this.props.todoToggle(item._id)} />
    ))
    return (
      <ul>{todos}</ul>
    )
  }
}

export default ToDoList;
