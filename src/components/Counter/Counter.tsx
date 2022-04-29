import React from 'react';

type Props = {};

interface State {
  count: number,
}

export class Counter extends React.Component<Props, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((currentCount) => ({
      count: currentCount.count + 1,
    }));
  };

  add100 = () => {
    this.setState((currentCount) => ({
      count: currentCount.count + 100,
    }));
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
        <h1>{`Current count: ${this.state.count}`}</h1>
        <button type="button" onClick={this.addOne}>
          Add 1
        </button>
        <button type="button" onClick={this.add100}>
          Add 100
        </button>
        <button type="button" onClick={this.increase}>
          Add 1 or 1 and 100
        </button>
      </>
    );
  }
}
