import React from 'react';
import './Counter.scss';

type State = {
  count: number;
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  add1 = () => {
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
    this.add1();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="main">

        <h1>{`Count: ${this.state.count}`}</h1>

        <button
          type="button"
          className="button"
          onClick={() => (
            this.add1()
          )}
        >
          Add 1
        </button>

        <button
          type="button"
          className="button"
          onClick={() => (
            this.add100()
          )}
        >
          Add 100
        </button>

        <button
          type="button"
          className="button"
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
