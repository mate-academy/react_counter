import React from 'react';
import { Counter } from './Components/Counter/Counter';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  };

  handleCounter = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    const { count } = this.state;

    return (
      <Counter count={count} handleCounter={this.handleCounter} />
    );
  }
}

export default App;
