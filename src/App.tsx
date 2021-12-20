import React from 'react';
import Counter from './Counter';
import './App.scss';

type State = {
  inc: number
};
class App extends React.Component<{}, State> {
  state = {
    inc: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      ...prevState,
      inc: prevState.inc + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
      ...prevState,
      inc: prevState.inc + 100,
    }));
  };

  increase = () => {
    this.addOne();
    if (this.state.inc % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { inc } = this.state;

    return (
      <Counter
        inc={inc}
        addOne={this.addOne}
        add100={this.add100}
        increase={this.increase}
      />
    );
  }
}

export default App;
