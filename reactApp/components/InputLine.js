import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedTest: ""
    }
  }

  handleTyping(event) {
    this.setState({
      typedText: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state.typedText);
    this.setState({
      typedText: ''
    });
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" placeholder="Task" onChange={(e) => this.handleTyping(e)} value={this.state.typedText}/>
        <input type="submit" value="Add" />
      </form>
    )
  }
}

export default InputLine;
