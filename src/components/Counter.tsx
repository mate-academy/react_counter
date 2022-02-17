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
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <>
        <h1 className="counter__title">
          {`Count: ${this.state.counter}`}
        </h1>

        <div className="counter__buttons">
          <button
            type="button"
            onClick={this.addOne}
          >
            Add one
          </button>

          <button
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </>
    );
  }
}
