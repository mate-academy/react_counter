import React, { Component } from "react";

export class Counter extends Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState (actualState => ({
          count: actualState.count + 1,
      }))
  };

  add100 = () => {
    this.setState (actualState => ({
          count: actualState.count + 100,
      }))
  };

  increase = () => {
    this.addOne();
    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  clearCounter = () => {
    this.setState({
      count: 0,
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>
          {`Counter: ${this.state.count}`}
        </h1>
        <button
          type='button'
          onClick={this.addOne}
          >
          Add 1
        </button>
        <button
          type='button'
          onClick={this.add100}
          >
          Add 100
        </button>
        <button
          type='button'
          onClick={this.increase}
          >
          Increase
        </button>
        <button
          type='button'
          onClick={this.clearCounter}
          >
          Clear
        </button>
      </React.Fragment>
    );
  }
}
