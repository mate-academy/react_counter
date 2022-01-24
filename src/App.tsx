import React from 'react';
import './App.scss';

type State = {
  count: number;
};

class App extends React.Component<{}, State> {
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
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  resetCounter = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {' '}
          {this.state.count}
        </h1>
        <button
          className="button"
          type="button"
          onClick={this.addOne}
        >
          +1
        </button>
        {' '}
        <button
          className="button"
          type="button"
          onClick={this.add100}
        >
          +100
        </button>
        {' '}
        <button
          className="button"
          type="button"
          onClick={this.increase}
        >
          Strange button
        </button>
        {' '}
        <button
          className="button button--resetButton"
          type="button"
          onClick={() => {
            this.resetCounter();
          }}
        >
          Reset counter
        </button>
      </>
    );
  }
}

export default App;
