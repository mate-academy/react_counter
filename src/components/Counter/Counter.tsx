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
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {' '}
          {this.state.count}
        </h1>
        <button
          type="button"
          onClick={this.addOne}
        >
          add 1
        </button>
        <button
          type="button"
          onClick={this.add100}
        >
          add 100
        </button>
        <button
          type="button"
          onClick={this.increase}
        >
          increase
        </button>
      </>
    );
  }
}
