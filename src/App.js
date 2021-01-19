import React from 'react';
import { Counter } from './conponents/Counter';

import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    this.setState(state => (
      state.count % 5 === 0
        ? (this.add100(), this.addOne())
        : this.addOne()
    ));
  };

  render() {
    return (
      <Counter
        addOne={this.addOne}
        add100={this.add100}
        increase={this.increase}
        count={this.state.count}
      />
    );
  }
}

export default App;
