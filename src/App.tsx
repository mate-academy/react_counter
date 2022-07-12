import React from 'react';
import './App.scss';

type State = {
  counter: number,
};

class App extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState((prev) => ({
      counter: prev.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((prev) => ({
      counter: prev.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <h1 className="paragraph">
          Count:
          {' '}
          {counter}
        </h1>
        <div className="buttons">
          <button
            className="btn"
            type="button"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            className="btn"
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            className="btn"
            type="button"
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
