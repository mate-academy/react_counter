import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

type State = {
  count: number;
};

export class App extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    const { count } = this.state;

    if (count % 5 === 0 && count > 0) {
      this.add100();
    }

    this.addOne();
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
