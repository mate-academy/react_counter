import React from 'react';
import './App.scss';

type State = {
  count: number;
};

export class App extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    this.addOne();
    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="app">
        <h1 className="app__title">
          Count:&nbsp;
          {this.state.count}
        </h1>
        <button
          className="app__button"
          type="button"
          onClick={this.addOne}
        >
          Add one
        </button>

        <button
          className="app__button"
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          className="app__button"
          type="button"
          onClick={this.increase}
        >
          Strange button
        </button>
      </div>
    );
  }
}
