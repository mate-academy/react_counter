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
    const currentCount = this.state.count;

    if (currentCount % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>{`Count: ${count}`}</h1>

        <button onClick={this.addOne} type="button">Add 1</button>
        <button onClick={this.add100} type="button">Add 100</button>
        <button onClick={this.increase} type="button">Add one and add 100</button>
      </div>
    );
  }
}
