import React from 'react';
import './App.scss';
import { Counter } from './components/Counter/Counter';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  add100 = () => {
    this.setState(({ count }) => ({
      count: count + 100,
    }));
  };

  increase = () => {
    const count = this.state;

    if (count % 5 === 0 && count !== 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const {
      state: { count },
      addOne,
      add100,
      increase,
    } = this;

    return (
      <Counter
        count={count}
        addOne={addOne}
        add100={add100}
        increase={increase}
      />
    );
  }
}

export default App;
