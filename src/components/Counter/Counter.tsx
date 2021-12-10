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
      <div className="countSection">
        <h1 className="countSection__title">
          Add more years to your life!
        </h1>
        <h1 className="countSection__count">
          Count:
          {counter}
        </h1>
        <div className="countSection__buttons">
          <button type="button" className="countSection__button1" onClick={this.addOne}>
            Add One
          </button>
          <button type="button" className="countSection__button2" onClick={this.add100}>
            Add Hundred
          </button>
          <button type="button" className="countSection__button3" onClick={this.increase}>
            Add More
          </button>
        </div>
      </div>
    );
  }
}
