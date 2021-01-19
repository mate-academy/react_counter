import React from 'react';

import './Counter.scss';

export class Counter extends React.Component {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="counter">
        <h1 className="counter__title">
          {`Count: ${counter}`}
        </h1>
        <div className="counter__buttons">
          <button
            type="button"
            className="counter__button"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            type="button"
            className="counter__button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            className="counter__button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
