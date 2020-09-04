import React from 'react';
import './Counter.scss';

class Counter extends React.Component {
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
    this.addOne();
    (this.state.count + 1) % 5 === 0 && this.add100();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="count">
        <h1 className="count__title">
          <span>Count: </span>
          <span>{count}</span>
        </h1>

        <div className="count__button-container">
          <button
            type="button"
            className="count__button"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            className="count__button"
            onClick={this.add100}
          >
            Add 2
          </button>

          <button
            type="button"
            className="count__button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
