import React from 'react';
import './Counter.scss';

export class Counter extends React.Component {
  state = {
    count: 0,
  }

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
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="counter">
        <h1 className="title">
          {`Count: ${this.state.count}`}
        </h1>

        <button
          type="button"
          className="button"
          onClick={this.addOne}
        >
          + 1
        </button>

        <button
          type="button"
          className="button"
          onClick={this.add100}
        >
          + 100
        </button>

        <button
          type="button"
          className="button"
          onClick={this.increase}
        >
          ???
        </button>
      </div>
    );
  }
}
