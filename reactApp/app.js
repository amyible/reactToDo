import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ['Cook dinner', 'Do laundry', 'Go to Gym', 'Mail Letters'];

class Todo extends React.Component {
  render() {
    return (
      <li><button>X</button>{this.props.task}</li>
    )
  }
}

class ToDoList extends React.Component {
  render() {
    let todos = dummyData.map((item, i) => (<Todo key={i} task={item} />))
    return (
      <ul>{todos}</ul>
    )
  }
}

ReactDOM.render(<ToDoList />,
   document.getElementById('root'));
