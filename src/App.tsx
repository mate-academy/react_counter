import React from 'react';
import './App.scss';

type State = {
  num: number,
};

class App extends React.Component<{}, State> {
  state = {
    num: 0,
  };

  addOne = () => {
    this.setState((prev: { num: number }) => {
      return (
        { num: prev.num + 1 }
      );
    });
  };

  add100 = () => {
    this.setState((prev: { num: number }) => {
      return (
        { num: prev.num + 100 }
      );
    });
  };

  increase = () => {
    this.addOne();

    if (this.state.num % 5 === 0 && this.state.num > 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div>
        <h1>
          Counter:&nbsp;
          {this.state.num}
        </h1>
        <button
          className="button"
          type="button"
          value="button"
          onClick={this.addOne}
        >
          Add one
        </button>
        <button
          className="button"
          type="button"
          value="button"
          onClick={this.add100}
        >
          Add hundred
        </button>
        <button
          className="button"
          type="button"
          value="button"
          onClick={this.increase}
        >
          Add *one*
        </button>
      </div>
    );
  }
}

export default App;
