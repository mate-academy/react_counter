import React from 'react';
import './Counter.scss';

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
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.counter}
        </h1>
        <button type="submit" className="addButton" onClick={this.addOne}>
          Add 1
        </button>
        <button type="submit" className="addButton" onClick={this.add100}>
          Add 100
        </button>
        <button type="submit" className="addButton" onClick={this.increase}>
          Add 1 ***
        </button>
      </>
    );
  }
}
