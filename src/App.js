import React from 'react';
import './App.scss';
import { Counter } from './components/Countert';

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
    this.setState((state) => {
      if (state.count % 5 === 0) {
        this.add100();
        this.addOne();
      } else {
        this.addOne();
      }
    });
  };

  render() {
    return (
      <Counter
        count={this.state.count}
        addOne={this.addOne}
        add100={this.add100}
        increase={this.increase}
      />
    );
  }
}

export default App;
