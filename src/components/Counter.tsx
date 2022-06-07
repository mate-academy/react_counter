/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

type State = {
  count: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => {
      let prev = state.count;

      prev += 1;

      return {
        count: prev,
      };
    });
  };

  add100 = () => {
    this.setState((state) => {
      let prev = state.count;

      prev += 100;

      return {
        count: prev,
      };
    });
  };

  increase = () => {
    this.setState((state) => {
      let prev = state.count;

      if (prev % 5 === 0) {
        prev += 1;
        prev += 100;
      } else {
        prev += 1;
      }

      return {
        count: prev,
      };
    });
  };

  render() {
    return (
      <div
        className="
          d-flex
          justify-content-center
          flex-wrap w-25
          mt-5
          p-3
          border
          border-primary
          rounded-4
        "
      >
        <h1 className="p-2 d-block">Count: {this.state.count}</h1>
        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={this.addOne}
          >
            Add one
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={this.add100}
          >
            Add one hundred
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>

      </div>
    );
  }
}
