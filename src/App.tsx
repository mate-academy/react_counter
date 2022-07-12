import React from 'react';
import './App.scss';

type State = {
  counter: number,
};

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    counter: 0,
  };

  addOne = () => {
    this.setState((state) => {
      return {
        counter: state.counter + 1,
      };
    });
  };

  add100 = () => {
    this.setState((state) => {
      return {
        counter: state.counter + 100,
      };
    });
  };

  increase = () => {
    this.setState((state) => {
      this.addOne();
      if ((state.counter % 5) === 0 && state.counter !== 0) {
        this.add100();
      }
    });
  };

  render() {
    return (
      <>
        <h1>{`Count: ${this.state.counter}`}</h1>
        <button
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          onClick={this.increase}
        >
          Increace
        </button>
      </>
    );
  }
}

export default App;
