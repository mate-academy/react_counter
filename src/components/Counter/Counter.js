import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: props.initialCount
    }
  }

  incrementCount = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }))
  }

  decrementCount = () => {
    this.setState(({ counter }) => ({
      counter: counter - 1
    }))
  }

  resetCount = () => {
    this.setState({
      counter: this.props.initialCount
    })
  }

  render() {
    const { counter } = this.state;

    return (
      <div className="counter">
        <div className="counter__count">Count: {counter}</div>
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
