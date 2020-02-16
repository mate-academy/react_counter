import React, { Component } from 'react';

export class Counter extends Component {
  state = {
    count: 0,
  }

  add = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  subtract = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    return (
      <>
        <h1>{`Count: ${this.state.count}`}</h1>
        <button type="button" onClick={this.add}>
          +
        </button>
        <button type="button" onClick={this.subtract}>
          -
        </button>
      </>
    );
  }
}
