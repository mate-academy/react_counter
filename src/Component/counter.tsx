import React from 'react';
import './counter.scss';

type State = {
  count: number;
};

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

  render() {
    return (
      <div className="container">
        <h1 className="title">
          {`Count: ${this.state.count}`}
        </h1>
        <div className="buttons">
          <button
            type="button"
            onClick={this.addOne}
            className="button is-info is-outlined"
          >
            Add 1
          </button>
          <button
            type="button"
            onClick={this.add100}
            className="button is-info is-outlined"
          >
            Add 100
          </button>
          <button
            type="button"
            onClick={this.increase}
            className="button is-info is-outlined"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
