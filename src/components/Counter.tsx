import { Component } from 'react';

import './Counter.scss';

export class Counter extends Component<{}, { count: number }> {
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

  addOneOr100 = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="Counter">
        <h1>{`Count: ${count}`}</h1>

        <button
          className="button"
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          className="button"
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          className="button button--magic"
          type="button"
          onClick={this.addOneOr100}
        >
          Add magic
        </button>
      </div>
    );
  }
}
