import React from 'react';
import './App.scss';

type State = {
  currentValue: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    currentValue: 0,
  };

  addOne = () => {
    this.setState((state) => (
      { currentValue: state.currentValue + 1 }
    ));
  };

  add100 = () => {
    this.setState((state) => (
      { currentValue: state.currentValue + 100 }
    ));
  };

  increase = () => {
    const { currentValue } = this.state;

    if (currentValue % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { currentValue } = this.state;

    return (
      <div className="container">
        <h1>
          Count:
          {currentValue}
        </h1>

        <button
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
