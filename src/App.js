import React from 'react';
import './App.scss';

class Counter extends React.Component {
  state = {
    count: 0,
  }

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
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <h1>
          {`Count: ${count}`}
        </h1>
        <button
          type="button"
          className="counter__button"
          onClick={this.addOne}
        >
          add one
        </button>
        <button
          type="button"
          className="counter__button"
          onClick={this.add100}
        >
          add 100
        </button>
        <button
          type="button"
          className="counter__button"
          onClick={this.increase}
        >
          increase
        </button>
      </div>
    );
  }
}

export default Counter;
