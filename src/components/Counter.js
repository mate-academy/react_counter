import React, { Component } from 'react';

export class Counter extends Component {
  state = {
    counter: 0,
  };

  incrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  resetCounter = () => {
    this.setState({
      counter: 0,
    });
  }

  render() {
    return (
      <div className="counter">
        <h1 className="counter__title">{`Counter: ${this.state.counter}`}</h1>
        <button
          className="counter__button"
          type="button"
          onClick={this.incrementCounter}
        >
          I am add to counter + 1
        </button>
        <button
          className="counter__button"
          type="button"
          onClick={this.resetCounter}
        >
          I am reset Counter
        </button>
      </div>
    );
  }
}
