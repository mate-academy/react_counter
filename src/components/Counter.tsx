import React from 'react';
import './Counter.scss';

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
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="
        has-background-dark
        main-container"
      >
        <h1 className="title is-1 has-text-warning">
          {`Count: ${count}`}
        </h1>

        <button
          type="button"
          className="button
            is-success
            is-large
            is-rounded"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          type="button"
          className="button
            is-warning
            is-large
            is-rounded"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          className="button
            is-danger
            is-large
            is-rounded"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}
