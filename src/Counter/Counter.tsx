import React from 'react';
import './Counter.scss';

type State = {
  count: number;
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

  increaseCounter = () => {
    const { count } = this.state;

    this.addOne();

    if (count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="counter">
        <h1>
          Count:
          {this.state.count}
        </h1>
        <div className="counter__btn-wrp">
          <button
            type="button"
            className="counter__btn"
            onClick={this.addOne}
          >
            add 1
          </button>

          <button
            type="button"
            className="counter__btn"
            onClick={this.add100}
          >
            add 100
          </button>

          <button
            type="button"
            className="counter__btn"
            onClick={this.increaseCounter}
          >
            increasing
          </button>
        </div>
      </div>
    );
  }
}
