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

  add101 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0 && this.state.count !== 0) {
      this.add101();
    }

    this.addOne();
  };

  render() {
    return (
      <div>
        <h1>
          Count:
          {' '}
          {this.state.count}
        </h1>

        <button
          type="button"
          onClick={() => {
            this.addOne();
          }}
        >
          add 1
        </button>
        <button
          type="button"
          onClick={() => {
            this.add101();
          }}
        >
          add 100
        </button>
        <button
          type="button"
          onClick={() => {
            this.increase();
          }}
        >
          add 100 + 1
        </button>
      </div>
    );
  }
}
