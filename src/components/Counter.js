import React from 'react';

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { counter } = this.state;
    return (
      <>
        <button name="clicker" className="ui button" onClick={this.handleClick}>
          Click me
        </button>
        <div className="counter ui label">Counter: {counter}</div>
      </>
    );
  }
}

export default Counter;
