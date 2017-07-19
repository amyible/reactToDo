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

  addToDo(task) {
    dummyData.push({taskText: task, completed: false});
    this.setState({
      todos: dummyData
    });
  }

  removeToDo(index) {
    dummyData.splice(index, 1);
    this.setState({
      todos: dummyData
    });
  }

  toggleStatus(index) {
    dummyData[index].completed = !dummyData[index].completed;
    this.setState({
      todos: dummyData
    });
  }

  render() {
    return (
      <div>
        <InputLine submit={(task) => this.addToDo(task)} />
        <ToDoList todos={this.state.todos} todoXClick={(index) => this.removeToDo(index)} todoToggle={(index) => this.toggleStatus(index)}/>
      </div>
    )
  }
}

export default ToDoApp;
