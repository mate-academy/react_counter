import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    result: 0,
  };

  addOne = () => {
    this.setState(state => ({
      result: state.result + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      result: state.result + 100,
    }));
  };

  increase = () => {
    this.addOne();
    ((this.state.result + 1) % 5 === 0) && this.add100();
  };

  render() {
    const { result } = this.state;

    return (
      <>
        <h1>
          Count:
          {result}
        </h1>

        <button
          type="button"
          onClick={this.addOne}
        >
          + 1
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          + 100
        </button>

        <button
          type="button"
          onClick={this.increase}
        >
          / 5
        </button>
      </>
    );
  }
}

export default App;
