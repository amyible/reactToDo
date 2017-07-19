import React from 'react';

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

export default InputLine;
