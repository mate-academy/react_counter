import React from 'react';
import './App.scss';

type Props = {};

type State = {
  counter: number,
};

class App extends React.Component<Props, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    } else {
      this.addOne();
    }
  };

  reset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h1>
          Count:
          {` ${counter}`}
        </h1>
        <button
          type="button"
          onClick={this.addOne}
          className="button"
        >
          One
        </button>

        <button
          type="button"
          onClick={this.add100}
          className="button"
        >
          Two
        </button>

        <button
          type="button"
          onClick={this.increase}
          className="button"
        >
          Three
        </button>

        <button
          type="button"
          onClick={this.reset}
          className="button"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default App;
