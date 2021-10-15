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

  addOneHundred = () => {
    this.setState((state) => ({
      counter: state.counter + 100,
    }));
  };

  increas = () => {
    const plusNumber = this.countClick % 5 === 0 ? 101 : 1;

    this.countClick += 1;
    this.setState((state) => ({
      counter: state.counter + plusNumber,
    }));
  };

  reset = () => {
    this.setState({ counter: 0 });
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
            Pluss 1
          </button>
          <button
            type="button"
            onClick={this.addOneHundred}
            className="button__item"
          >
            Pluss 100
          </button>
          <button
            type="button"
            onClick={this.increas}
            className="button__item"
          >
            Increas
          </button>
        </div>
        <button
          type="button"
          onClick={this.reset}
          className="button-reset"
        >
          Reset
        </button>
      </div>
    );
  }
}
