import React from 'react';
import './App.scss';

type State = {
  number: number,
};

class App extends React.Component<{}, State> {
  state:State = {
    number: 0,
  };

  addOne = () => {
    this.setState((currentState) => {
      let { number } = currentState;

      number += 1;

      return {
        number,
      };
    });
  };

  add100 = () => {
    this.setState((currentState) => {
      let { number } = currentState;

      number += 100;

      return {
        number,
      };
    });
  };

  increase = () => {
    this.setState((currentState) => {
      let { number } = currentState;

      number += number % 5 ? 1 : 100;

      return {
        number,
      };
    });
  };

  render() {
    return (
      <>
        <h1>
          {`Count: ${this.state.number}`}
        </h1>
        <button
          type="button"
          className="button is-success is-focused"
          onClick={() => this.addOne()}
        >
          add 1
        </button>
        <button
          type="button"
          className="button is-success is-focused"
          onClick={() => this.add100()}
        >
          add 100
        </button>
        <button
          type="button"
          className="button is-success is-focused"
          onClick={() => this.increase()}
        >
          increase
        </button>
      </>
    );
  }
}

export default App;
