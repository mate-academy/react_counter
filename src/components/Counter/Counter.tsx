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
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="app">
        <div className="counter">
          <h1 className="counter__title">
            {`Count is: ${count}`}
          </h1>

          <div className="counter__buttons">
            <button
              type="button"
              className="counter__button"
              onClick={this.addOne}
            >
              Add 1
            </button>
            <button
              type="button"
              className="counter__button"
              onClick={this.add100}
            >
              Add 100
            </button>
            <button
              type="button"
              className="counter__button"
              onClick={this.increase}
            >
              Increase
            </button>
          </div>
        </div>
      </div>
    );
  }
}
