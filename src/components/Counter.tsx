import React from 'react';

type State = {
  counter: number;
};

export class Counter extends React.Component<{}, State> {
  state: State = {
    counter: 0,
  };

  addOne = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
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
    const { counter } = this.state;

    return (
      <div className="App">
        <h1>
          {`Count : ${counter}`}
        </h1>

        <button type="button" onClick={this.addOne}>
          Add one
        </button>

        <button type="button" onClick={this.add100}>
          Add 100
        </button>

        <button type="button" onClick={this.increase}>
          Increase
        </button>
      </div>
    );
  }
}
