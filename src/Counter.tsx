import React, { Props } from 'react';
import './Counter.scss';

export class Counter extends React.Component<Props<State>, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.state.count += 1;

    this.setState((prevState: State) => {
      return {
        count: prevState.count,
      };
    });
  };

  add100 = () => {
    this.state.count += 100;

    this.setState((prevState: State) => {
      return {
        count: prevState.count,
      };
    });
  };

  increase = () => {
    this.addOne();

    if ((this.state.count - 1) % 5 === 0) {
      this.add100();
    }

    this.setState((prevState: State) => {
      return {
        count: prevState.count,
      };
    });
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>{`Count: ${count}`}</h1>
        <button
          type="button"
          onClick={this.addOne}
        >
          Add 1
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
      </>
    );
  }
}
