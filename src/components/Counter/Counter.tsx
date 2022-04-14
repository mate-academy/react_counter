import React from 'react';

type State = {
  item: number,
};

class Counter extends React.Component<{}, State> {
  state: State = {
    item: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      item: state.item + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      item: state.item + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.item % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {` ${this.state.item}`}
        </h1>
        <button type="button" onClick={this.addOne}>
          Add 1
        </button>
        <button type="button" onClick={this.add100}>
          Add 100
        </button>
        <button type="button" onClick={this.increase}>
          Callback add1
        </button>
      </>
    );
  }
}

export default Counter;