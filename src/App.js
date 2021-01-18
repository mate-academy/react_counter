import React from 'react';
import './App.scss';
import { Counter } from './Counter';

class App extends React.Component {
  state = {
    number: 0,
  }

  addOne = () => {
    this.setState(state => ({ number: state.number + 1 }));
  };

  add100 = () => {
    this.setState(state => ({ number: state.number + 100 }));
  };

  increase = () => {
    if (this.state.number % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <Counter
        addOne={this.addOne}
        add100={this.add100}
        increase={this.increase}
        number={this.state.number}
      />
    );
  }
}

export default App;
