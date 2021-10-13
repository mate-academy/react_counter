import React from 'react';
import './App.scss';
import { Counter } from './components/Counter/index';

type State = {
  counter: number,
};

class App extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    return this.setState((currentState) => ({
      counter: currentState.counter + 1,
    }));
  };

  add100 = () => {
    return this.setState((currentState) => ({
      counter: currentState.counter + 100,
    }));
  };

  add = () => {
    if (this.state.counter % 5 === 0) {
      this.addOne();
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    return (
      <Counter
        addOne={this.addOne}
        add100={this.add100}
        add={this.add}
        counter={this.state.counter}
      />
    );
  }
}

export default App;
