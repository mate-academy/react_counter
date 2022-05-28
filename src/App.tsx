import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

type Props = {};

type State = {
  count: number,
};

class App extends React.Component<Props, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => (
    (this.state.count % 5 === 0)
      ? (this.addOne(), this.add100())
      : this.addOne()
  );

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
