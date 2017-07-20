import React from 'react';
import ToDoList from './ToDoList';
import InputLine from './InputLine';
import axios from 'axios';

const dbUrl = "http://localhost:3000/db";

class ToDoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    axios.get(dbUrl + '/all')
      .then(function(resp) {
        this.setState({
          todos: resp.data
        })
      }.bind(this));
  }

  addToDo(task) {
    let self = this;
    axios.post(dbUrl + '/add', {taskText: task})
      .then(function(response) {
        self.setState({ todos: self.state.todos.concat(response.data)});
      })
      .catch(function (error) {
        console.log("Error", error);
      });
  }

  removeToDo(id) {
    let self = this;
    axios.post(dbUrl + '/remove', { id: id } )
      .then(function(resp) {
        let newArr = self.state.todos.slice();
        let i = newArr.findIndex((a) => (a.taskText === resp.data.taskText));
        newArr.splice(i, 1);
        self.setState({
          todos: newArr
        })
      })
  }

  toggleStatus(id) {
    let self = this;
    axios.post(dbUrl + '/toggle', { id: id } )
      .then(function(resp) {
        let newArr = self.state.todos.slice();
        let i = newArr.find((a) => (a.taskText === resp.data.taskText));
        if (i) i.completed = !i.completed;
        self.setState({
          todos: newArr
        })
      });
  }

  render() {
    return (
      <div>
        <InputLine submit={(task) => this.addToDo(task)} />
        <ToDoList todos={this.state.todos} todoXClick={(id) => this.removeToDo(id)} todoToggle={(id) => this.toggleStatus(id)}/>
      </div>
    )
  }
}

export default ToDoApp;
