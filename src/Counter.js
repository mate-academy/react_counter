import React from 'react';
import './App.css';

class Counter extends React.Component {
  state = {
    count: 0,
  }

  addCount = (event) => {
    this.setState(previous => (
      { count: previous.count + 1 }
    ));
  }

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button
          onClick={this.addCount}
          type="button"
        >
          Click
        </button>
      </>
    );
  }
}

export default Counter;
