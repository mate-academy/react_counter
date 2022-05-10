import React from 'react';
import './Counter.scss';

type State = {
  counter: number;
};

export class Counter extends React.Component<{}, State> {
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
        <h1 className="counter__title">COUNT#</h1>

        <span className="counter__number">{counter}</span>

        <div className="counter__buttons">
          <button
            className="counter__button"
            type="button"
            onClick={this.addOne}
          >
            Add One
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
      </div>
    );
  }
}
