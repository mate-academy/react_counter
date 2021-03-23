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

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { addOne, add100, increase, state } = this;

    return (
      <Counter
        count={state.count}
        addOne={addOne}
        add100={add100}
        increase={increase}
      />
    );
  }
}

export default App;
