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
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  add100 = () => {
    this.setState(({ count }) => ({
      count: count + 100,
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
      <div className="count">
        <h1 className="count__title">
          {`Count: ${count}`}
        </h1>
        <div className="count__buttons">
          <button
            type="button"
            className="count__button"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            type="button"
            className="count__button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            className="count__button"
            onClick={this.increase}
          >
            Magic Button
          </button>
        </div>
      </div>
    );
  }
}
