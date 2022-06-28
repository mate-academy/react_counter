import React from 'react';
import './App.scss';

type State = {
  value: number
};

class App extends React.Component<{}, State> {
  state = {
    value: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      value: state.value + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      value: state.value + 100,
    }));
  };

  increase = () => {
    this.addOne();
    if (this.state.value % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="container box is-centered has-text-centered">
        <h1 className="title">
          Value:
          {' '}
          {this.state.value}
        </h1>
        <div className="buttonsBlock">
          <button
            type="button"
            className="button is-outlined"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            type="button"
            className="button is-outlined"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            className="button is-outlined"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
