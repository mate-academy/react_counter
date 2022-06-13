import React from 'react';
import '../App.scss';

type State = {
  counter: number;
};

export class Counter extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState((state: { counter: number; }) => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((state: { counter: number }) => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.counter % 5 === 0) {
      this.add100();
    }
  };

  render(): React.ReactNode {
    const { counter } = this.state;

    return (
      <>
        <h1>{`Count: ${counter}`}</h1>

        <button
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          className="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </>
    );
  }
}
