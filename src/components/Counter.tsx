import React from 'react';
import './Counter.scss';

type State = {
  count: number;
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

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

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="content">
        <h1>{`Count: ${this.state.count}`}</h1>
        <button
          type="button"
          className="button is-link"
          onClick={() => (
            this.addOne()
          )}
        >
          Add 1
        </button>
        <button
          type="button"
          className="button is-link"
          onClick={() => (
            this.add100()
          )}
        >
          Add 100
        </button>
        <button
          type="button"
          className="button is-link"
          onClick={() => (
            this.increase()
          )}
        >
          Increase
        </button>
      </div>

    );
  }
}
