import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  setCounter = () => {
    this.setState(state => ({
      ...state,
      counter: state.counter + 1,
    }));
  };

  render() {
    return (
      <div className="counter">
        <button onClick={this.setCounter}>Click me</button>
        <h3>Count: {this.state.counter}</h3>
      </div>
    );
  }
}

export default Counter;
