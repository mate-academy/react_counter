import React, { Component } from 'react';
import Counter from './components/Counter/Counter';
import './App.css';

class App extends Component {
  state = {};

  render() {
    //   const { counterValue } = this.state;

    return (
      <Counter />
    );
  }
}

export default App;
