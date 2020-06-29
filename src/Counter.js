import React from 'react';
import './App.css';

class Counter extends React.Component {
  state = {
    counter: 0,
  }

  addCount = (event) => {
    this.setState(previous => ({
      counter: previous.counter + 1,
    }));
  }

  render() {
    return (
      <div className="counter">
        <h1>
          Count:
          {this.state.counter}
        </h1>
        <button
          onClick={this.addCount}
          type="button"
          className="click"
        >
          Click
        </button>
      </div>
    );
  }
}

export default Counter;
