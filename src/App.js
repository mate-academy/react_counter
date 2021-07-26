import React from 'react';
import './App.scss';
import { Counter } from './components';

class App extends React.Component {
  state = {
    count: 0,
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
  }

  render() {
    return (
      <Counter
        count={this.state.count}
        add100={this.add100}
        addOne={this.addOne}
        increase={this.increase}
      />
    );
  }
}

export default App;
