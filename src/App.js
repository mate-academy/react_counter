import React from 'react';

import { Counter } from './components/counter';
import './App.scss';

class App extends React.Component {
  state = {
    result: 0,
  };

  addOne = () => {
    this.setState(currentState => (
      {
        result: currentState.result + 1,
      }
    ));
  }

  add100 = () => {
    this.setState(currentState => (
      {
        result: currentState.result + 100,
      }
    ));
  }

  increase = () => {
    if (this.state.result % 5 === 0) {
      this.add100();
      this.addOne();
    } else {
      this.addOne();
    }
  };

  render() {
    return (
      <Counter
        state={this.state}
        addOne={this.addOne}
        add100={this.add100}
        increase={this.increase}
      />
    );
  }
}

export default App;
