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
      return {
        number: currentState.number + 1,
      };
    });
  };

  add100 = () => {
    this.setState((currentState) => {
      return {
        number: currentState.number + 100,
      };
    });
  };

  increase = () => {
    this.addOne();
    if (this.state.number % 5 === 0) {
      this.add100();
    }
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
        {' '}
        <button
          type="button"
          className="button is-success is-focused"
          onClick={() => this.add100()}
        >
          add 100
        </button>
        {' '}
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
