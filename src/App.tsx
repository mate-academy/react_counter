import React from 'react';
import './App.scss';

type State = {
  counter: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    counter: 0,
  };

  addOne = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  add100 = () => {
    this.setState((state) => ({ counter: state.counter + 100 }));
  };

  increase = () => {
    this.setState((state) => {
      const { counter } = state;

      if (counter % 5 === 0 && counter !== 0) {
        this.add100();
        this.addOne();
      } else {
        this.addOne();
      }
    });
  };

  clear = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div className="App">
        <h1>{`Count: ${this.state.counter}`}</h1>
        <button
          className="App__button"
          type="button"
          onClick={() => this.addOne()}
        >
          Add 1
        </button>
        <button
          className="App__button"
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>
        <button
          className="App__button"
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
        <button
          className="App__button"
          type="button"
          onClick={this.clear}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default App;
