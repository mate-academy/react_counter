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

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <p className="counter__description">
          Count sheeps to sleep!
        </p>

        <h1 className="counter__title">
          {`Sheeps count: ${count}`}
        </h1>

        <div className="counter__buttons">
          <button
            type="button"
            className="counter__button"
            onClick={this.addOne}
          >
            Add one
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
            Click and see!
          </button>
        </div>
      </div>
    );
  }
}
