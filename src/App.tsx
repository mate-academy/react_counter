import React from 'react';
import './App.scss';

type State = {
  num: number;
};

class App extends React.Component<{}, State> {
  state = {
    num: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      num: state.num + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      num: state.num + 100,
    }));
  };

  increase = () => {
    if (this.state.num % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { num } = this.state;

    return (
      <div className="App">
        <h1>
          Count:
          {num}
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
      </div>
    );
  }
}

export default App;
