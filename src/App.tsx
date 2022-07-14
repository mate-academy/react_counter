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
    }

    this.addOne();
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <div className="App__counter">
          <h1 className="App__counter-title">
            {`Count: ${counter}`}
          </h1>

          <button
            type="button"
            className="App__counter-button"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            className="App__counter-button"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            className="App__counter-button"
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
