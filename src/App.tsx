import React from 'react';
import './App.scss';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state = {
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
    const { count } = this.state;

    return (
      <div className="app">
        <div className="app__frame">
          <h1 className="app__text">
            {`Count: ${count}`}
          </h1>

          <div className="app__action">
            <button
              type="button"
              className="app__button"
              onClick={this.addOne}
            >
              Add 1
            </button>
            <button
              type="button"
              className="app__button"
              onClick={this.add100}
            >
              Add 100
            </button>
            <button
              type="button"
              className="app__button"
              onClick={this.increase}
            >
              Increase adding...
            </button>
          </div>
        </div>
      </div>
    );
  }
}
