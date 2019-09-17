import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  state = {
    counter: 0,
  };

  handler = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };

  render() {
    const { counter } = this.state;
    const { handler } = this;

    return (
      <div className="ui inverted segment wrapper-button">
        <h1 className="wrapper__title">Counter: {counter}</h1>

        <button
          type="button"
          className="ui inverted teal button btn"
          onClick={handler}
        >
          Change counter
        </button>
      </div>
    );
  }
}

export default Counter;
