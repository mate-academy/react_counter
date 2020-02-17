import React, { Component } from 'react';
import './Counter.css';

export class Counter extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <div className="counter">
        <h1 className="counter__text">
          {`Count: ${this.state.counter}`}
        </h1>
        <button
          onClick={this.handleClick}
          type="button"
          className="counter__button"
        >
          Add some
        </button>
      </div>
    );
  }
}
