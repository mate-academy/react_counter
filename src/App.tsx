import React from 'react';
import './App.scss';
import { State } from './react-app-env';

export class App extends React.Component<{}, State> {
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
        this.addOne();
        this.add100();
      } else {
        this.addOne();
      }
    });
  };

  setClear = () => {
    this.setState({ counter: 0 });
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="counter content is-medium">
        <h1 className="counter__title">
          Count:
          {counter}
        </h1>
        <div className="counter__button-box">
          <button
            type="button"
            onClick={this.addOne}
            className="counter__button__one button is-info is-rounded"
          >
            Add one
          </button>
          <button
            type="button"
            className="counter__button__hundred button is-info is-rounded"
            onClick={this.add100}
          >
            Add one hundred
          </button>
          <button
            type="button"
            className="counter__button__increase button is-warning is-rounded"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
        <button
          type="button"
          className="counter__button__clear button is-danger is-rounded"
          onClick={this.setClear}
        >
          Clear
        </button>
      </div>
    );
  }
}
