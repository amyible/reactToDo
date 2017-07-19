import React from 'react';
import ToDoList from './ToDoList';
import InputLine from './InputLine';

const dummyData = [{ taskText: "Catch 'em all", completed: false }, { taskText: "Do laundry", completed: true }, { taskText: "Cook dinner", completed: false }, { taskText: "Mail letters", completed: false }];

class ToDoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({
      todos: dummyData
    })
  }

  render() {
    return (
      <div>
        <InputLine />
        <ToDoList todos={this.state.todos} />
      </div>
    )
  }
}

export default ToDoApp;
