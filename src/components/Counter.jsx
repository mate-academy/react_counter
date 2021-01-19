import React from 'react';

import './Counter.scss';

class Counter extends React.Component {
  state = {
    countedNumber: 0,
  }

  addOne = () => {
    this.setState(state => ({
      countedNumber: state.countedNumber + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      countedNumber: state.countedNumber + 100,
    }));
  };

  increase = () => {
    if (this.state.countedNumber % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { countedNumber } = this.state;

    return (
      <div className="counter">
        <h1>
          Count:
          {' '}
          {countedNumber}
        </h1>
        <div className="counter__buttons">
          <button
            type="button"
            className="counter__button"
            onClick={this.addOne}
          >
            + 1
          </button>
          <button
            type="button"
            className="counter__button"
            onClick={this.add100}
          >
            + 100
          </button>
          <button
            type="button"
            className="counter__button"
            onClick={this.increase}
          >
            just push
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
