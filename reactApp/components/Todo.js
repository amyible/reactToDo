import React from 'react';

class Todo extends React.Component {
  render() {
    if (this.props.status) return (<li style={{textDecoration: 'line-through'}} onClick={() => this.props.toggleClick()}><button onClick={() => this.props.xClick()}>X</button>{this.props.task}</li>);
    else return (<li onClick={() => this.props.toggleClick()}><button onClick={() => this.props.xClick()}>X</button>{this.props.task}</li>);
  }
}

export default Todo;
