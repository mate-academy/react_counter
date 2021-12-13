import React from 'react';
import './Counter.scss';

type State = {
  counter: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState((count) => ({
      counter: count.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((count) => ({
      counter: count.counter + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.counter % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="counter">
        <h1 className="counter__title">
          Your number is:
          {' '}
          {counter}
        </h1>
        <div className="buttons">
          <button
            className="button"
            type="button"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            className="button"
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            className="button"
            type="button"
            onClick={this.increase}
          >
            Secret
          </button>
        </div>
      </div>
    );
  }
}
