import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
          Count:
          {' '}
          {' '}
          <span className="count-value">{count}</span>
        </h1>
        <button
          type="button"
          className="button-count"
          onClick={this.addOne}
        >
          Add 1
        </button>
        <button
          type="button"
          className="button-count"
          onClick={this.add100}
        >
          Add 100
        </button>
        <button
          type="button"
          className="button-count"
          onClick={this.increase}
        >
          Increase
        </button>
      </>
    );
  }
}
