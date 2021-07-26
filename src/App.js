import React from 'react';
import './App.scss';
import { Counter } from './components/Counter/Counter';

class App extends React.Component {
  state = {
    count: 1,
  }

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <Counter
        count={count}
        addOne={this.addOne}
        addHundred={this.add100}
        increase={this.increase}
      />
    );
  }
}

export default App;
