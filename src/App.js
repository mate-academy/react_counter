import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  add100 = () => {
    this.setState(prev => ({ count: prev.count + 100 }));
  };

  increase = () => {
    if (this.state.count > 0 && this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
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
