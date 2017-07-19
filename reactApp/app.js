import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [{ taskText: "Catch 'em all", completed: false }, { taskText: "Do laundry", completed: true }, { taskText: "Cook dinner", completed: false }, { taskText: "Mail letters", completed: false }];

class InputLine extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Task"/>
        <input type="submit" value="Add" />
      </form>
    )
  }
}

class Todo extends React.Component {
  render() {
    if (this.props.status) return (<li style={{textDecoration: 'line-through'}}><button>X</button>{this.props.task}</li>);
    else return (<li><button>X</button>{this.props.task}</li>);
  }
}

class ToDoList extends React.Component {
  render() {
    let todos = this.props.todos.map((item, i) => (<Todo key={i} task={item.taskText} status={item.completed} />))
    return (
      <ul>{todos}</ul>
    )
  }
}

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

ReactDOM.render(<ToDoApp />,
   document.getElementById('root'));
