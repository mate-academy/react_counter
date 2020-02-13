import React, { Component } from 'react';
import { Counter } from './Counter';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { counter } = this.state;

    return <Counter counter={counter} handleClick={this.handleClick} />;
  }
}

export default App;
