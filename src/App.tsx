import React from 'react';
import './App.scss';

type Props = {

};

type State = {
  counter: number,
};

class App extends React.Component<Props, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState((prev) => ({
      counter: prev.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((prev) => ({
      counter: prev.counter + 100,
    }));
  };

  increase = () => {
    this.setState((prev) => {
      if (prev.counter % 5 === 0) {
        this.add100();
      }

      this.addOne();
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
          Increase by one
        </button>
        <button
          type="button"
          onClick={this.add100}
        >
          Increase by hundred
        </button>
        <button
          type="button"
          onClick={this.increase}
        >
          Increase by condition
        </button>
      </>
    );
  }
}

export default App;
