import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

interface State {
  counter: number;
}

class App extends React.Component<{}, State> {
  state: State = {
    counter: 0,
  };

  addOne = () => {
    this.setState((previousState) => ({
      counter: previousState.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((previousState) => ({
      counter: previousState.counter + 100,
    }));
  };

  increase = () => {
    const { counter } = this.state;

    if (counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <Counter
        counter={this.state.counter}
        addOne={this.addOne}
        add100={this.add100}
        increase={this.increase}
      />
    );
  }
}

export default App;
