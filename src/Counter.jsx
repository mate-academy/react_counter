import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    const { count } = this.state;

    // eslint-disable-next-line no-unused-expressions
    Number.isInteger(count / 5)
      ? (this.add100(), this.addOne())
      : this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
          {`Count: ${count}`}
        </h1>
        <button type="button" onClick={this.addOne}>
          Add 1
        </button>
        <button type="button" onClick={this.add100}>
          Add 100
        </button>
        <button type="button" onClick={this.increase}>
          Multiple add
        </button>
      </>
    );
  }
}

export default Counter;
