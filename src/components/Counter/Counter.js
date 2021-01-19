import React, { Component } from 'react';

export class Counter extends Component {
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
    if (this.state.count % 5 === 0 && this.state.count !== 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="Counter">
        <h1>
          Count:
          {' '}
          {this.state.count}
        </h1>

        <button
          type="button"
          className="Counter__btn"
          onClick={() => {
            this.addOne();
          }}
        >
          add 1
        </button>
        <button
          type="button"
          className="Counter__btn"
          onClick={() => {
            this.add100();
          }}
        >
          add 100
        </button>
        <button
          type="button"
          className="Counter__btn"
          onClick={() => {
            this.increase();
          }}
        >
          surprise me
        </button>
      </div>
    );
  }
}
