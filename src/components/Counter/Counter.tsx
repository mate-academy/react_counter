import React from 'react';

type Props = {};

type State = {
  count: number,
};

export class Counter extends React.Component<Props, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    this.setState((state) => {
      this.addOne();

      if (state.count % 5 === 0) {
        this.add100();
      }
    });
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>{`Count: ${count}`}</h1>
        <button type="button" onClick={this.addOne}>Add 1</button>
        <button type="button" onClick={this.add100}>Add 100</button>
        <button type="button" onClick={this.increase}>Increase</button>
      </>
    );
  }
}
