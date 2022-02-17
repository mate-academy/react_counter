import React from 'react';
import './Counter.scss';

type Props = {};

type State = {
  counter: number,
};

class Counter extends React.Component<Props, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <>
        <h1 className="counter">
          {'Count: '}
          {this.state.counter}
        </h1>

        <div className="counter__buttons">
          <button
            type="button"
            onClick={this.addOne}
          >
            Adds 1
          </button>

          <button
            type="button"
            onClick={this.add100}
          >
            Adds 100
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
