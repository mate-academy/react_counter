import React from 'react';

type State = {
  counter: number;
};

export class Counter extends React.Component<{}, State> {
  state: State = {
    counter: 0,
  };

  addOne = () => {
    this.setState((prevState) => {
      return ({
        counter: prevState.counter + 1,
      });
    });
  };

  add100 = () => {
    this.setState((prevState) => {
      return ({
        counter: prevState.counter + 100,
      });
    });
  };

  increase = () => {
    this.addOne();
    if (this.state.counter % 5 === 0) {
      this.add100();
    }
  };

  render(): React.ReactNode {
    return (
      <>
        <h1>
          Count:
          {this.state.counter}
        </h1>
        <div>
          <button
            type="button"
            onClick={this.addOne}
          >
            Add One
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
