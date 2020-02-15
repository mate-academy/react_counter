import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increaseCount = () => {
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
          onClick={this.increaseCount}
        >
            Click me
        </button>
      </>
    );
  }
}

export default Counter;
