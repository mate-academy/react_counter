import React, { Component } from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      show: true
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    return (
      <>
        <button onClick={() => this.handleIncrement()} type="button">Click me!</button>
        <div>Count: {this.state.counter}</div>
      </>
    );
  }
}

export default Counter;
