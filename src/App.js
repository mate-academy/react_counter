import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0,
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }

  render() {
    const { count } = this.state;

    return (
      <>
        <button type="button" onClick={this.incrementCount} >Increment</button>
        <button type="button" onClick={this.decrementCount} >Decrement</button>
        <div>Count: {count}</div>
      </>
    );
  }
}

export default App;
