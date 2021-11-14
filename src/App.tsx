import React from 'react';
import './App.scss';

interface State {
  result: number;
}

class App extends React.Component <{}, State> {
  state = {
    result: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      result: state.result + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      result: state.result + 100,
    }));
  };

  increase = () => {
    this.addOne();

    const { result } = this.state;

    if (result % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { result } = this.state;

    return (
      <>
        <h1>{`Count: ${result}`}</h1>

        <button
          type="button"
          onClick={() => this.addOne()}
        >
          addOne
        </button>

        <button
          type="button"
          onClick={() => this.add100()}
        >
          add100
        </button>

        <button
          type="button"
          onClick={() => this.increase()}
        >
          increase
        </button>
      </>
    );
  }
}

export default App;
