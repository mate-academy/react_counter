import React, { Component } from 'react';
import './counter.css';

export default class Counter extends Component {
  state = {
    value: 0,
  }

  handleIncrement = (e) => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <h1>
          Count:
          {' '}
          {value}
        </h1>
        <button type="button" onClick={this.handleIncrement}>
                  Increment
        </button>
      </div>
    );
  }
}
