import React, { Component } from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1,
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
          count: {this.state.count}
        </div>
      </div>
    );
  }
}

export default Counter;
