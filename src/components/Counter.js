import React from 'react';
import './Counter.scss';

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  increaseCounter = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  decreaseCounter = () => {
    this.setState(state => ({
      counter: state.counter - 1,
    }));
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    const { counter } = this.state;

    return (
      <>
        <h1 className="counter">
          Counter:
          {counter}
        </h1>
        <button
          type="button"
          className="counter__button"
          onClick={this.increaseCounter}
        >
          Increase me
        </button>
        <button
          type="button"
          className="counter__button"
          onClick={this.decreaseCounter}
        >
          Decrease me
        </button>
        <button
          type="button"
          className="counter__button"
          onClick={this.reset}
        >
          Reset
        </button>
      </>
    );
  }
}

export default Counter;
