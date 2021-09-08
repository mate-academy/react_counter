import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Counter.scss';

type State = {
  counter: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState((currentState) => {
      return {
        counter: currentState.counter + 1,
      };
    });
  };

  add100 = () => {
    this.setState((currentState) => {
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
    const { counter } = this.state;

    return (
      <div className="wrapper">
        <div className="counter">
          <h1 className="alert alert-primary">
            Count:
            {' '}
            {counter}
          </h1>
          <div
            className="d-grid gap-2"
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.addOne}
            >
              addOne
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.add100}
            >
              add100
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.increase}
            >
              increase
            </button>
          </div>
        </div>
      </div>
    );
  }
}
