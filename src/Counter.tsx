import React from 'react';
import './App.scss';

type State = {
  count: number;
};

export class Counter extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  add100 = () => {
    this.setState((state) => ({ count: state.count + 100 }));
  };

  increase = () => {
    this.setState((state) => {
      this.addOne();

      if (state.count % 5 === 0) {
        this.add100();
      }
    });
  };

  render() {
    return (
      <div className="app">
        <h1 className="app__title">
          Count:
          {this.state.count}
        </h1>
        <div className="app__buttons">
          <button
            type="button"
            className="app__button"
            onClick={this.addOne}
          >
            addOne
          </button>
          <button
            type="button"
            className="app__button"
            onClick={this.add100}
          >
            add100
          </button>
          <button
            type="button"
            className="app__button"
            onClick={this.increase}
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}
