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
      <div className="wrapper">
        <h1 className="header">
          {`Count: ${value}`}
        </h1>
        <button type="button" className="button" onClick={this.handleIncrement}>
                  Increment
        </button>
      </div>
    );
  }
}
