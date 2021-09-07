import React from 'react';

import './Counter.scss';

interface State {
  count: number;
}

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((currentState) => ({
      count: currentState.count + 1,
    }));
  };

  add100 = () => {
    this.setState((currentState) => ({
      count: currentState.count + 100,
    }));
  };

  increase = () => {
    this.addOne();
    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">{`Count: ${this.state.count}`}</h1>
        <button
          className="button"
          type="button"
          onClick={this.addOne}
        >
          addOne
        </button>
        <button
          className="button"
          type="button"
          onClick={this.add100}
        >
          add100
        </button>
        <button
          className="button"
          type="button"
          onClick={this.increase}
        >
          increase
        </button>
      </div>
    );
  }
}
