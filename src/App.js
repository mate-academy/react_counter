import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

class App extends React.Component {
  state = {
    number: 0,
  }

  addOne = () => {
    this.setState(prevState => ({
      number: prevState.number + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      number: prevState.number + 100,
    }));
  };

  increase = () => {};

  render() {
    const { number } = this.state;

    return (
      <Counter
        number={number}
        addOne={this.addOne}
        add100={this.add100}
      />
    );
  }
}

export default App;
