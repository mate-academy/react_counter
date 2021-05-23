import React from 'react';
import './Counter.scss';

export class Counter extends React.Component {
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
      this.addOne();
      if (this.state.count % 5 === 0) {
        this.add100();
      }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="wrapper">
        <h1 className="title">
          Count:
          {' '}
          {count}
        </h1>
        <button
          className="title__button"
          type="button"
          onClick={this.addOne}
        >
          +1
        </button>
        <button
          className="title__button"
          type="button"
          onClick={this.add100}
        >
          +100
        </button>
        <button
          className="title__button"
          type="button"
          onClick={this.increase}
        >
          increase
        </button>
      </div>
    );
  }
}
