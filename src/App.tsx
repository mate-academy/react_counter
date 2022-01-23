import React from 'react';
import './App.scss';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  add100 = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 100,
      };
    });
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <h1>{`Count: ${this.state.count}`}</h1>
        <button type="button" onClick={this.addOne}>AddOne</button>
        <button type="button" onClick={this.add100}>Add100</button>
        <button type="button" onClick={this.increase}>Increase</button>
      </>
    );
  }
}
