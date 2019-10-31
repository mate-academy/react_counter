import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState(state => ({
      ...state,
      counter: state.counter + 1,
    }));
  };

  render() {
    return (
      <>
        <div>{this.state.counter}</div>
        <button type="button" onClick={this.increment}>CLICK ME!</button>
      </>
    );
  }
}

export default Counter;
