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
    this.setState(({ count }) => {
      this.addOne();
      if (count % 5 === 0) {
        this.add100();
      }
    });
  };

  render() {
    return (
      <div>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button
          className="btn"
          type="button"
          onClick={this.addOne}
        >
          +1
        </button>
        <button
          className="btn"
          type="button"
          onClick={this.add100}
        >
          +100
        </button>
        <button
          className="btn"
          type="button"
          onClick={this.increase}
        >
          Secret
        </button>
      </div>
    );
  }
}
