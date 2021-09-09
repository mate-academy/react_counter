import React from 'react';
import './App.scss';

type AppState = {
  count: number;
};

class App extends React.Component {
  state: AppState = {
    count: 0,
  };

  addOne = () => {
    this.setState((state: AppState): AppState => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state: AppState): AppState => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>
          Count:
          {count}
        </h1>

        <button type="button" onClick={this.addOne}>
          AddOne
        </button>

        <button type="button" onClick={this.add100}>
          Add100
        </button>

        <button type="button" onClick={this.increase}>
          increase
        </button>
      </div>
    );
  }
}

export default App;
