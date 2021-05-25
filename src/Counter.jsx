import React from 'react';

export class Counter extends React.Component {
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

  add = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;
    return (
      <>
        <h1>Count: {count}</h1>

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
          onClick={this.add}
        >
          add 1 or 100
        </button>
      </>
    );
  };
}
