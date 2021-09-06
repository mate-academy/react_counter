import React from 'react';
import './Counter.scss';

export class Counter extends React.Component<{}, State> {
  state: State = {
    num: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      num: state.num + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      num: state.num + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.num % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { num } = this.state;

    return (
      <div className="Counter">
        <h1 className="count">{`Count: ${num}`}</h1>
        <div className="buttons">
          <button
            type="button"
            className="button"
            onClick={this.addOne}
          >
            Add One
          </button>
          <button
            type="button"
            className="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            className="button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
