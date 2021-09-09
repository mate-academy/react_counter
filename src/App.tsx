import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

type State = {
  count: number;
};

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((currentState) => ({
      count: currentState.count + 1,
    }));
  };

  add100 = () => {
    this.setState((currentState) => ({
      count: currentState.count + 100,
    }));
  };

  increase = () => {
    this.setState((currentState) => {
      const currentCount = currentState.count;

      this.addOne();

      if (currentCount % 5 === 0) {
        this.add100();
      }

      return { count: currentCount };
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <Counter
          count={count}
          addOne={this.addOne}
          add100={this.add100}
          increase={this.increase}
        />
      </div>
    );
  }
}

export default App;
