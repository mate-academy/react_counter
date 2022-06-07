import React from 'react';
import './Counter.scss';

interface State {
  count: number;
}

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render(): React.ReactNode {
    const { count } = this.state;

    return (
      <div
        className="box
          has-background-grey-lighter
          has-text-centered"
      >
        <h1 className="title is-1">{`Count: ${count}`}</h1>

        <button
          type="button"
          onClick={this.addOne}
          className="button is-success is-light"
        >
          Add 1
        </button>

        <button
          type="button"
          onClick={this.add100}
          className="button is-warning is-light"
        >
          Add 100
        </button>

        <button
          type="button"
          onClick={this.increase}
          className="button is-danger is-light"
        >
          Increase
        </button>
      </div>
    );
  }
}
