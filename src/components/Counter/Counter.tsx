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
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (!(this.state.counter % 5)) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="Counter">
        <h1 className="Counter__title">
          Count:
          {this.state.counter}
        </h1>
        <button
          type="button"
          onClick={this.addOne}
          className="button is-large is-responsive is-rounded"
        >
          Add 1
        </button>
        <button
          type="button"
          onClick={this.add100}
          className="button is-large is-responsive is-rounded"
        >
          Add 100
        </button>
        <button
          type="button"
          onClick={this.increase}
          className="button is-large is-responsive is-rounded"
        >
          Increase
        </button>
      </div>
    );
  }
}
