import React, { Component } from 'react';
import Counter from './Counter';
import './App.css';

class App extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    return <Counter count={count} handleClick={this.handleClick} />;
  }
}

export default App;
