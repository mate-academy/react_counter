import React from 'react';
import './Counter.scss';

export class Counter extends React.Component {
  state = {
    countIncrease: 0,
    count: 0,
  }

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    if (this.state.countIncrease === 5) {
      this.setState(state => ({
        count: state.count + 100,
        countIncrease: state.countIncrease * 0,
      }));
    }

    this.setState(state => ({
      count: state.count + 1,
      countIncrease: state.countIncrease + 1,
    }));
  };

  render() {
    return (
      <div className="counter">
        <h1 className="counter__title title is-2">
          Count:
          {' '}
          {this.state.count}
        </h1>
        <div className="counter__wrapper">
          <button
            className="button is-primary is-light"
            type="button"
            onClick={this.addOne}
          >
            Add One
          </button>
          <button
            className="button is-link is-light"
            type="button"
            onClick={this.add100}
          >
            Add Hundred
          </button>
          <button
            className="button is-warning is-light"
            type="button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
