import React from 'react';
import './App.scss';

type State = {
  count: number;
};

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  add100 = () => {
    this.setState((prev) => ({
      count: prev.count + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0 && this.state.count > 0) {
      this.add100();
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  random = () => {
    const random = Math.round(Math.random() * 100);

    this.setState((prev) => ({
      count: prev.count + random,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="app">
        <h1 className="app__numbers">
          Count:
          {' '}
          { count }
        </h1>

        <div className="app__buttons">
          <button
            className="app__button"
            type="button"
            onClick={() => {
              this.addOne();
            }}
          >
            +1
          </button>

          <button
            className="app__button"
            type="button"
            onClick={() => {
              this.add100();
            }}
          >
            +100
          </button>

          <button
            className="app__button"
            type="button"
            onClick={() => {
              this.increase();
            }}
          >
            Increase
          </button>

          <button
            className="app__button"
            type="button"
            onClick={() => {
              this.random();
            }}
          >
            Random
          </button>

          <button
            className="app__button"
            type="button"
            onClick={() => {
              this.reset();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
