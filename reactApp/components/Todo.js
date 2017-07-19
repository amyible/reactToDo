import React from 'react';

class Todo extends React.Component {
  render() {
    if (this.props.status) return (<li style={{textDecoration: 'line-through'}}><button>X</button>{this.props.task}</li>);
    else return (<li><button>X</button>{this.props.task}</li>);
  }
}

export default Todo;
