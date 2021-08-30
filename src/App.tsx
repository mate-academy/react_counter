import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

interface State {
  count: number,
}

class App extends React.Component {
  state: State = {
    count: 0,
  };

  addOne = () => (
    this.setState((previousState: State) => (
      { count: previousState.count + 1 }))
  );

  add100 = () => (
    this.setState((previousState: State) => (
      { count: previousState.count + 100 }))
  );

  increase = () => {
    const { count } = this.state;

    if (count % 5 === 0) {
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
