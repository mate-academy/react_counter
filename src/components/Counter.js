import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  increaseCounter = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1 className="counter">
          Counter:
          {count}
        </h1>
        <button
          type="button"
          className="counter__button"
          onClick={this.increaseCounter}
        >
          Click Me
        </button>
      </>
    );
  }
}

export default Counter;
