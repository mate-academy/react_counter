import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

class App extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(currentState => ({
      counter: currentState.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(currentState => ({
      counter: currentState.counter + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if ((this.state.counter + 1) % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { counter } = this.state;

    return (
      <Counter
        counter={counter}
        addOne={this.addOne}
        add100={this.add100}
        increase={this.increase}
      />
    );
  }
}

export default App;
