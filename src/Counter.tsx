import React from 'react';
import { State } from './State';

class Counter extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((state: State) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state: State) => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>{`Count: ${count}`}</h1>
        <div>
          <button
            type="button"
            onClick={this.addOne}
          >
            add One
          </button>
          <button
            type="button"
            onClick={this.add100}
          >
            add 100
          </button>
          <button
            type="button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
