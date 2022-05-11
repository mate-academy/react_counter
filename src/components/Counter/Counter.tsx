import React from 'react';

type Props = {};

type State = {
  counter: number;
};

export class Counter extends React.Component<Props, State> {
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

  reset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h1>
          Count:
          {` ${counter}`}
        </h1>
        <button
          type="button"
          onClick={this.addOne}
          className="button"
        >
          One
        </button>

        <button
          type="button"
          onClick={this.add100}
          className="button"
        >
          Add 100
        </button>

        <button
          type="button"
          onClick={this.increase}
          className="button"
        >
          Increase
        </button>

        <button
          type="button"
          onClick={this.reset}
          className="button"
        >
          Reset
        </button>
      </div>
    );
  }
}
