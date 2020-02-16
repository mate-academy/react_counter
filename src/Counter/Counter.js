import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  state = {
    counter: 0,
  }

  increaseCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    return (
      <>
        <h1 className="counter-title">
          {`Count: ${this.state.counter}`}
        </h1>
        <button
          type="button"
          className="counter-btn"
          onClick={this.increaseCounter}
        >
            Click me
        </button>
      </>
    );
  }
}

export default Counter;
