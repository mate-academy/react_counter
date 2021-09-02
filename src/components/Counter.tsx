import React from 'react';
import './Counter.scss';

type State = {
  counter: number;
};

export class Counter extends React.Component<{}, State> {
  state: State = {
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
    this.addOne();

    if (this.state.counter % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { counter } = this.state;

    return (
      <section>
        <h1>{`Count: ${counter}`}</h1>

        <button
          type="button"
          className="btn btn-outline-success"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          type="button"
          className="btn btn-outline-success"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          className="btn btn-outline-success"
          onClick={this.increase}
        >
          Increase
        </button>
      </section>
    );
  }
}
