import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  }

  render() {
    return (
      <>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <div>{this.state.counter}</div>
        <button type="button" onClick={this.increment}>+</button>
      </>
    );
  }
}

export default Counter;
