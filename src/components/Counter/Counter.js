import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  state = {
    counterValue: 0,
    step: 1,
  };

  handleClick = () => {
    this.setState(prevState => ({
      counterValue: prevState.counterValue + prevState.step,
    }));
  }

  render() {
    const { counterValue } = this.state;
    const { handleClick } = this;

    return (
      <div className="counter-container">
        <div className="counter">
          <h1>{`Count: ${counterValue}`}</h1>
        </div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleClick}
        >
          Click to count
        </button>
      </div>
    );
  }
}

export default Counter;
