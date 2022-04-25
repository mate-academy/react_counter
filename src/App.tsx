import React from 'react';
import './App.scss';

type State = {
  currentState: number;
};

export class App extends React.Component<{}, State> {
  state = {
    currentState: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      currentState: state.currentState + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      currentState: state.currentState + 100,
    }));
  };

  increase = () => {
    this.setState((state) => {
      if (state.currentState % 5 === 0) {
        this.add100();
      }

      return {
        currentState: state.currentState + 1,
      };
    });
  };

  render() {
    const { currentState } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          Count:
          {' '}
          {currentState}
        </h1>
        <div className="App__buttons">

          <button
            type="button"
            className="App__button"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            className="App__button"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            className="App__button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
