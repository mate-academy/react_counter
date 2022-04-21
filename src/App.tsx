import React from 'react';
import './App.scss';

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
          {this.state.counter}
        </h1>
        <button type="button" onClick={this.addOne}>
          Add 1!
        </button>
        <button type="button" onClick={this.add100}>
          Add 100!
        </button>
        <button type="button" onClick={this.increase}>
          Add 1 or 101
        </button>
      </>
    );
  }
}

export default App;
