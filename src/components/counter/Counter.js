import React, { Component } from 'react';

class Counter extends Component {
  state = {count: 0};

  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };
  render() {
    return (
      <>
        <div>Counter: {this.state.count}</div>
        <button onClick={this.handleClick}>Click me</button>
      </>
      );
  }
}

export default Counter;
