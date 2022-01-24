import React from 'react';
import './App.scss';

type Props = {};

type State = {
  displayedNumber: number;
};

class App extends React.Component<Props, State> {
  state: State = {
    displayedNumber: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      displayedNumber: state.displayedNumber + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      displayedNumber: state.displayedNumber + 100,
    }));
  };

  increase = () => {
    if (this.state.displayedNumber % 5 === 0
      && this.state.displayedNumber !== 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="app">
        <h1 className="title">{`Count: ${this.state.displayedNumber}`}</h1>

        <button
          type="button"
          className="button is-info"
          onClick={this.addOne}
        >
          Add one
        </button>

        <button
          type="button"
          className="button is-success"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          className="button is-warning"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
