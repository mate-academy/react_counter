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
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      counter: state.counter + 100,
    }));
  };

  addDivisibleCall = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="Counter">
        <h1 className="Counter__title">
          {`Count: ${this.state.counter}`}
        </h1>

        <button
          className="Counter__button"
          type="button"
          onClick={() => {
            this.addOne();
          }}
        >
          Add 1
        </button>

        <button
          className="Counter__button"
          type="button"
          onClick={() => {
            this.add100();
          }}
        >
          Add 100
        </button>

        <button
          className="Counter__button"
          type="button"
          onClick={() => {
            this.addDivisibleCall();
          }}
        >
          {this.state.counter % 5 === 0
            ? 'Add 101'
            : 'Add 1'}
        </button>
      </div>
    );
  }
}
