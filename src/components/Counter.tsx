import React from 'react';

type State = {
  count: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  incrementCount = (num: number) => {
    this.setState((prevState) => ({ count: prevState.count + num }));
  };

  addOne = () => {
    this.incrementCount(1);
  };

  add100 = () => {
    this.incrementCount(100);
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.incrementCount(100);
    }

    this.incrementCount(1);
  };

  render() {
    const { count } = this.state;

    const btnIncrement1 = React.createElement('button',
      { type: 'button', onClick: this.addOne }, 'addOne');

    const btnIncrement2 = React.createElement('button',
      { type: 'button', onClick: this.add100 }, 'add100');

    const btnIncrement3 = React.createElement('button',
      { type: 'button', onClick: this.increase }, 'increase');

    return (
      <>
        <h1>
          Count:
          {count}
        </h1>
        {btnIncrement1}
        {btnIncrement2}
        {btnIncrement3}
      </>
    );
  }
}
