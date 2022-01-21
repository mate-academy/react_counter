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
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => (
    this.state.count % 5 === 0
      ? (this.add100(), this.addOne())
      : this.addOne()
  );

  render() {
    const { count } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">{`Count: ${count}`}</h1>

        <div className="app__buttons">
          <button
            type="button"
            className="app__button app__button--1"
            onClick={this.addOne}
          >
            +1
          </button>

          <button
            type="button"
            className="app__button app__button--100"
            onClick={this.add100}
          >
            +100
          </button>

          <button
            type="button"
            className="app__button app__button--increase"
            onClick={this.increase}
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}
