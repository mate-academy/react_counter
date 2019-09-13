import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: props.initialCount
    }
  }

  incrementCount = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }))
  }

  decrementCount = () => {
    this.setState(({ count }) => ({
      count: count - 1
    }))
  }

  resetCount = () => {
    this.setState({
      count: this.props.initialCount
    })
  }

  render() {
    return (
      <div className="counter">
        <div className="counter__count">Count: {this.state.count}</div>
        <button
          type="button"
          className="counter__button"
          onClick={this.incrementCount}
        >
          increment
        </button>
        <button
          type="button"
          className="counter__button"
          onClick={this.decrementCount}
        >
          decrement
        </button>
        <button
          type="button"
          className="counter__button"
          onClick={this.resetCount}
        >
          reset
        </button>
      </div>
    );
  }
}
