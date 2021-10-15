import React from 'react';

type State = {
  count: number
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  add100 = () => {
    this.setState(({ count }) => ({ count: count + 100 }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
          {`State: ${count}`}
        </h1>
        <button
          type="button"
          onClick={this.addOne}
        >
          +1
        </button>
        <button
          type="button"
          onClick={this.add100}
        >
          +100
        </button>
        <button
          type="button"
          onClick={this.increase}
        >
          {count % 5 === 0 ? '+101' : '+1'}
        </button>
      </>
    );
  }
}
