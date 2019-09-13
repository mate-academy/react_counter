import React, { Component } from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  handleClick() {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  render () {
    return (
      <div className="wrapper">
        <button
          className="btn"
          onClick={() => this.handleClick()}
          type="button"
        >
          Click me
        </button>
        <div className="counter">
          count: {this.state.counter}
        </div>
      </div>
    );
  }
}

export default Counter;
