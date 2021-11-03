import React from 'react';

type Props = {};
type State = {
  num: number;
};
type VoidFn = () => void;

class Counter extends React.Component<Props, State> {
  state = {
    num: 0,
  };

  addOne: VoidFn = () => {
    this.setState(state => ({ num: state.num + 1 }));
  };

  add100: VoidFn = () => {
    this.setState(state => ({ num: state.num + 100 }));
  };

  increase: VoidFn = () => {
    const { num } = this.state;

    if (num % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { num } = this.state;

    return (
      <>
        <h1>
          {`Count: ${num}`}
        </h1>
        <button type="button" onClick={this.addOne}>addOne</button>
        <button type="button" onClick={this.add100}>add100</button>
        <button type="button" onClick={this.increase}>increase</button>
      </>
    );
  }
}

export default Counter;
