import { Component } from 'react';
import './Counter.scss';

type State = {
  count: number,
};

export class Counter extends Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0 && this.state.count > 0) {
      this.addOne();
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    return (
      <div>
        <h1>
          Count:
          {` ${this.state.count}`}
        </h1>
        <button
          type="button"
          onClick={() => {
            this.addOne();
          }}
        >
          Add 1
        </button>
        <button
          type="button"
          onClick={() => {
            this.add100();
          }}
        >
          Add 100
        </button>
        <button
          type="button"
          onClick={() => {
            this.increase();
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}
