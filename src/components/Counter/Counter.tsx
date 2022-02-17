import React from 'react';
import './Counter.scss';

type State = {
  counter: number;
};

export class Counter extends React.Component<{}, State> {
  countClick = 0;

  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
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
          Count:
          {' '}
          {counter}
        </h1>
        <div className="button">
          <button
            type="button"
            onClick={this.addOne}
            className="button__item"
          >
            Plus 1
          </button>
          <button
            type="button"
            onClick={this.add100}
            className="button__item"
          >
            Plus 100
          </button>
          <button
            type="button"
            onClick={this.increase}
            className="button__item"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
