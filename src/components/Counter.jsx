import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(
      state => ({ count: state.count + 1 }),
    );
  };

  add100 = () => {
    this.setState(
      state => ({ count: state.count + 100 }),
    );
  };

  increase = () => {
    this.addOne();

    // eslint-disable-next-line
    (this.state.count % 5 === 0) && this.add100();
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.count}
        </h1>

        <button type="button" onClick={this.addOne}>
          add 1
        </button>

        <button type="button" onClick={this.add100}>
          add 100
        </button>

        <button type="button" onClick={this.increase}>
          add 1 or 101
        </button>
      </>
    );
  }
}

export default Counter;
