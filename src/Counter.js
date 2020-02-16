import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState(increaseState => ({
      counter: increaseState.counter + 1,
    }));
  };

  render() {
    return (
      <div className="wrapper">
        <h1>
          {`Count: ${this.state.counter}`}
        </h1>
        <button onClick={this.handleClick} type="button">Add some</button>
      </div>
    );
  }
}

export default Counter;
