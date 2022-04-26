import React from 'react';
import './App.scss';

interface Counter {
  count: number,
}

class App extends React.Component<{}, Counter> {
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
    if (this.state.count >= 0 && this.state.count % 5 === 0) {
      this.setState((state) => ({
        count: state.count + 101,
      }));
    } else {
      this.setState((state) => ({
        count: state.count + 1,
      }));
    }
  };

  resetCount = () => {
    this.setState((state) => ({
      count: state.count - state.count,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="app">
        <h1>
          Count:
          {count}
        </h1>

        <button type="button" onClick={this.addOne}>
          Add one
        </button>

        <button type="button" onClick={this.add100}>
          Add 100
        </button>

        <button type="button" onClick={this.increase}>
          Increase
        </button>

        <button type="button" onClick={this.resetCount}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
