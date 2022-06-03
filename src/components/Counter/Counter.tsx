import React from 'react';
import './Counter.scss';

type State = {
  counter: number;
};

export class Counter extends React.Component<{}, State> {
  state: State = {
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
      this.addOne();
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="counter box">
        <h1 className="counter__title">
          {`Count: ${counter}`}
        </h1>

        <div className="counter__buttonWrapper">
          <button
            type="button"
            className="
              button
              is-primary
              is-outlined
            "
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            className="
              button
              is-primary
              is-outlined
            "
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            className="
              button
              is-primary
              is-outlined
            "
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
