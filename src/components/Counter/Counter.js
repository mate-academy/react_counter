import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterValue: 0,
      step: 1,
    };
  }

  handleClick = () => {
    this.setState({
      counterValue: this.state.counterValue + this.state.step,
    });

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
