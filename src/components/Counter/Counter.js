import React, { Component } from 'react';
import './Counter.scss';

export default class Counter extends Component {
  state = {
    counter: 0,
  };

  onCounterClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { counter } = this.state;

    return (
      <>
        <div className="counter">
          Count:
          {counter}
        </div>
        <button type="button" onClick={this.onCounterClick}>Click me</button>
      </>
    );
  }
}
