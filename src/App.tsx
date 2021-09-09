import React from 'react';
import './App.scss';

type State = {
  counter: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    counter: 0,
  };

  addOne = () => {
    this.setState(({ counter }) => {
      return {
        counter: counter + 1,
      };
    });
  };

  add100 = () => {
    this.setState(({ counter }) => {
      return {
        counter: counter + 100,
      };
    });
  };

  increase = () => {
    this.setState(({ counter }) => {
      if (counter % 5 === 0) {
        this.add100();
      }

      return {
        counter: counter + 1,
      };
    });
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.counter}
        </h1>
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
          Increase
        </button>
      </>
    );
  }
}

export default App;
