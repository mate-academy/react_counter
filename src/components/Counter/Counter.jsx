import React from 'react';

class Counter extends React.Component {
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
    this.setState(({ count }) => {
      this.addOne();
      if (count % 5 === 0) {
        this.add100();
      }

      return {};
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>
          Count:
          {count}
        </h1>
        <button type="button" onClick={this.addOne}>
          adds 1
        </button>
        <button type="button" onClick={this.add100}>
          adds 100
        </button>
        <button type="button" onClick={this.increase}>
          Magic btn
        </button>
      </div>
    );
  }
}

export default Counter;
