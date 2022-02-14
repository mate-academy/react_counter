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
    this.setState((state) => {
      if (state.counter % 5 === 0) {
        this.add100();
      }

      this.addOne();

      return state;
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
          Add one
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
          increase!!!
        </button>
      </>
    );
  }
}

export default App;
