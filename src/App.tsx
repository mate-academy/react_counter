import React from 'react';
import { Counter } from './component/Counter';
import './App.scss';

type State = {
  count: number,
};

class App extends React.Component<{}, State> {
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

    if (count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <>
        <Counter
          count={this.state.count}
          addOne={this.addOne}
          add100={this.add100}
          increase={this.increase}
        />
      </>
    );
  }
}

export default App;
