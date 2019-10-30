import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  counter = () => {
    this.setState(prev => ({
      ...prev,
      counter: this.state.counter + 1
    }));
  }

  render() {
    return (
      <div className="counter">
        <h1>{this.state.counter}</h1>
        <button class="massive ui button" onClick={this.counter}>Click me</button>
      </div>
    );
  }
}

export default Counter;
