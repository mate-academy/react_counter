import React from 'react';
import './App.scss';

interface State {
  value: number;
}

class App extends React.Component<{}, State> {
  state = {
    value: 0,
  };

  addOne = () => {
    this.setState((currState) => {
      return {
        value: currState.value + 1,
      };
    });
  };

  add100 = () => {
    this.setState((currState) => {
      return {
        value: currState.value + 100,
      };
    });
  };

  increase = () => {
    this.addOne();

    if (this.state.value % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="title is-2">
          Count:
          {this.state.value}
        </h1>
        <button
          className="button is-link is-outlined"
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          className="button is-link is-outlined"
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          className="button is-link is-outlined"
          type="button"
          onClick={this.increase}
        >
          Magic addition
        </button>
      </div>
    );
  }
}

export default App;
