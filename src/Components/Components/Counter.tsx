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
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };

  add100 = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 100 };
    });
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
        <h1 className="counter__num">
          Count:
          {' '}
          {counter}
        </h1>
        <div className="counter__buttons">
          <button type="button" className="counter__button" onClick={this.addOne}>
            Add One
          </button>
          <button type="button" className="counter__button" onClick={this.add100}>
            Add Hundred
          </button>
          <button type="button" className="counter__button" onClick={this.increase}>
            Special button
          </button>
        </div>
      </div>
    );
  }
}
