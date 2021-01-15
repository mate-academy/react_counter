import React from 'react';
import './App.scss';
import { Counter } from './components/Counter/Counter';

class App extends React.Component {
  state={
    value: 0,
  }

  addOne = () => {
    this.setState(state => ({
      value: state.value + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      value: state.value + 100,
    }));
  };

  increase = () => {
    if (this.state.value % 5 === 0) {
      this.addOne();
    }
  };

  render() {
    return (
      <Counter
        addOne={this.addOne}
        add100={this.add100}
        increase={this.increase}
        value={this.state.value}
      />
    );
  }
}

export default App;
