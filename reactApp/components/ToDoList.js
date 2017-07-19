import React from 'react';
import Todo from './Todo';

class ToDoList extends React.Component {
  render() {
    let todos = this.props.todos.map((item, i) => (
      <Todo key={i} task={item.taskText} status={item.completed} xClick={() => (this.props.todoXClick(i))} toggleClick={() => this.props.todoToggle(i)} />
    ))
    return (
      <ul>{todos}</ul>
    )
  }
}

export default ToDoList;
