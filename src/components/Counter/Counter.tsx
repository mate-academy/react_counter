import React from 'react';

interface State {
  counter: number;
}

export class Counter extends React.Component<{}, State> {
  state: State = {
    counter: 0,
  };

  addOne = () => {
    this.setState((currentState) => ({
      counter: currentState.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((currentState) => ({
      counter: currentState.counter + 100,
    }));
  };

  increase = () => {
    const { counter } = this.state;

    this.addOne();

    if (counter % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { counter } = this.state;

    return (
      <>
        <h1>
          {`Count: ${counter}`}
        </h1>
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
          Add one hundred
        </button>
        <button
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </>
    );
  }
}
