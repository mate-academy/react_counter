import React from 'react';

type State = {
  count: number,
  increaseClicksCount: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
    increaseClicksCount: 0,
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
    this.addOne();
    this.setState((state) => {
      return ({ increaseClicksCount: state.increaseClicksCount + 1 });
    });

    if (this.state.increaseClicksCount === 5) {
      this.add100();
      this.setState({ increaseClicksCount: 1 });
    }
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>{`Count: ${count}`}</h1>
        <button type="button" onClick={this.addOne}>+ 1</button>
        <button type="button" onClick={this.add100}>+ 100</button>
        <button type="button" onClick={this.increase}>Increase</button>
      </>
    );
  }
}
