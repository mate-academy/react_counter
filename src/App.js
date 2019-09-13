import React from 'react';
import './App.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: 1 + prevState.count,
    }));
  }

  decrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
  }
  resetCount = () => {
    this.setState({
      count: 0,
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCount} type="button">Increment</button>
        <button onClick={this.decrementCount} type="button">decrement</button>
        <button onClick={this.resetCount} type="button">reset</button>
      </div>
    );
  }
}

export default Counter;
