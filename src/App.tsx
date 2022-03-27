import React from 'react';

import './button.css';
import './App.scss';

type State = {
  age: number,
};

class App extends React.Component<{}, State> {
  state = {
    age: 0,
  };

  addOne = () => {
    this.setState(state => ({
      age: state.age + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      age: state.age + 100,
    }));
  };

  increase = () => {
    const expression = this.state.age % 5 === 0
      ? 101
      : 1;

    this.setState(state => ({
      age: state.age + expression,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__header">
          {`Count: ${this.state.age}`}
        </h1>

        <button
          type="button"
          className="button-23"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          type="button"
          className="button-23"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          className="button-23"
          onClick={this.increase}
        >
          Broken button
        </button>
      </div>
    );
  }
}

export default App;
