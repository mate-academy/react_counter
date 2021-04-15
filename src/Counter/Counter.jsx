import React from 'react';
import './Counter.scss';

export class Counter extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prev => ({
      count: prev.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prev => ({
      count: prev.count + 100,
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
        <h1>
          Count:
          {' '}
          {this.state.count}
        </h1>
        <div>
          <button
            type="button"
            className="counter__button"
            onClick={this.addOne}
          >
            addOne
          </button>
          <button
            type="button"
            className="counter__button"
            onClick={this.add100}
          >
            add100
          </button>
          <button
            type="button"
            className="counter__button"
            onClick={this.increase}
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}
