import React from 'react';
import './App.css';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  decrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
  };

  resetCount = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>{count}</h1>
        <button onClick={this.incrementCount} type="button">Increment</button>
        <button onClick={this.decrementCount} type="button">decrement</button>
        <button onClick={this.resetCount} type="button">reset</button>
      </div>
    );
  }
}

export default Counter;
