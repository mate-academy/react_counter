import React from 'react';
import './App.scss';
import Counter from './components/Counter/Counter';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prev => ({
      count: prev.count + 1,
    }));
  }

  add100 = () => {
    this.setState(prev => ({
      count: prev.count + 100,
    }));
  }

  increase = () => {
    this.setState((prev) => {
      if (prev.count % 5 === 0) {
        this.add100();
      }

      this.addOne();
    });
  }

  render() {
    return (
      <Counter param={this} />
    );
  }
}

export default App;
