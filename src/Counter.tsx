import React from 'react';
import './App.scss';

type State = {
  count: number;
};

export class Counter extends React.Component <{}, State> {
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

  render() {
    return (
      <div className="block box level level-item title is-4">
        <h1>{`Count: ${this.state.count}`}</h1>
        <button
          type="button"
          onClick={this.addOne}
          className="button is-primary m-3 title is-4"
        >
          Add 1
        </button>
        <button
          type="button"
          onClick={this.add100}
          className="button is-primary m-3 title is-4"
        >
          Add 100
        </button>
        <button
          type="button"
          onClick={this.increase}
          className="button is-primary m-3 title is-4"
        >
          Increase
        </button>
      </div>
    );
  }
}
