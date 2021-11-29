import React from 'react';

type State = {
  count: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => {
      return ({ count: state.count + 1 });
    });
  };

  add100 = () => {
    this.setState((state) => {
      return ({ count: state.count + 100 });
    });
  };

  increase = () => {
    const { count } = this.state;

    this.addOne();
    if (count % 5 === 0 && count !== 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <h1>{`Count: ${this.state.count}`}</h1>
        <button type="button" onClick={this.addOne}>+ 1</button>
        <button type="button" onClick={this.add100}>+ 100</button>
        <button type="button" onClick={this.increase}>Increase</button>
      </>
    );
  }
}
