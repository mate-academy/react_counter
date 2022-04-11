import React from 'react';

type State = {
  counter: number,
};
class App extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    this.addOne();
    if (this.state.counter % 5 === 0 && this.state.counter !== 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {' '}
          {this.state.counter}
        </h1>
        <button type="button" onClick={this.addOne}>addOne</button>
        <button type="button" onClick={this.add100}>add100</button>
        <button type="button" onClick={this.increase}>increase</button>
      </>

    );
  }
}

export default App;
