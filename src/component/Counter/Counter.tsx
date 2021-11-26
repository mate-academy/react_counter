import React from 'react';
import './Counter.scss';

type State = {
  count: number,
};

export class Counter extends React.Component<{}, State> {
  state: State = {
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
    const { count } = this.state;

    return (
      <div className="counter-block">
        <h1>
          Count:
          {' '}
          {count}
        </h1>
        <div className="btn-section">
          <button
            type="button"
            onClick={this.addOne}
          >
            add one
          </button>
          <button
            type="button"
            onClick={this.add100}
          >
            add 100
          </button>
          <button
            type="button"
            onClick={this.increase}
          >
            add something
          </button>
        </div>
      </div>
    );
  }
}
