import React from 'react';
import { Counter } from './components/Counter';
import './App.scss';

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
    this.addOne();
    ((this.state.count + 1) % 5 === 0) && this.add100();
  };

  render() {
    const { count } = this.state;

    return (
      <Counter
        count={count}
        addOne={this.addOne}
        add100={this.add100}
        increase={this.increase}
      />
    );
  }
}

export default App;
