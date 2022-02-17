import React from 'react';

type State = {
  count: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  add100 = () => {
    this.setState(({ count }) => ({
      count: count + 100,
    }));
  };

  increase = () => {
    const { addOne, add100, state } = this;
    const { count } = state;

    addOne();

    if (count % 5 === 0) {
      add100();
    }
  };

  render() {
    const { addOne, add100, increase } = this;

    return (
      <>
        <h1>
          Count:
          {' '}
          {this.state.count}
        </h1>

        <button type="button" onClick={addOne}>
          Add 1
        </button>

        <button type="button" onClick={add100}>
          Add 100
        </button>

        <button type="button" onClick={increase}>
          Increase
        </button>
      </>
    );
  }
}
