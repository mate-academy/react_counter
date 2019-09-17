import React from 'react';
import './App.css';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState(prevState => ({
      count: 1 + prevState.count,
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
    const {
      count
    } = this.state;
    const {
      incrementCount,
      decrementCount,
      resetCount
    } = this;
    
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={incrementCount} type="button">Increment</button>
        <button onClick={decrementCount} type="button">decrement</button>
        <button onClick={resetCount} type="button">reset</button>
      </div>
    );
  }
}

export default Counter;
