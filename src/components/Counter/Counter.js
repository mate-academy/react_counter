import React, { Component } from 'react';
import './Counter.scss';

export class Counter extends Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(state => (
      {
        count: state.count + 1,
      }
    ));
  }

  add100 = () => {
    this.setState(state => (
      {
        count: state.count + 100,
      }
    ));
  }

  increase = () => {
    this.addOne();
    if (this.state.count % 5 === 0) {
      this.add100();
    }
  }

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <h1>{`Count: ${count}`}</h1>
        <button
          className="counter__button"
          type="button"
          onClick={this.addOne}
        >
          Add one
        </button>
        <button
          className="counter__button"
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>
        <button
          className="counter__button"
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}
