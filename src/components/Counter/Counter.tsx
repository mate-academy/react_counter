import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './Counter.scss';

type State = {
  counter: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState(currentState => {
      return {
        counter: currentState.counter + 1,
      };
    });
  };

  add100 = () => {
    this.setState(currentState => {
      return {
        counter: currentState.counter + 100,
      };
    });
  };

  increase = () => {
    this.addOne();
    if (this.state.counter % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <h1 className="alert alert-info">
          Count:
          {' '}
          {this.state.counter}
        </h1>
        <div
          className="d-grid gap-3"
        >
          <button
            type="button"
            className="btn btn-success"
            onClick={this.addOne}
          >
            AddOne
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.add100}
          >
            Add100
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
