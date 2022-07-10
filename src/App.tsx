import React from 'react';
import './App.scss';

interface State {
  counter: number;
}

class App extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState((currentState) => ({
      counter: currentState.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((currentState) => ({
      counter: currentState.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="App has-text-centered is-vcentered">
        <h1 className="title">{`Count: ${this.state.counter}`}</h1>
        <div className="buttons is-centered">
          <button
            type="button"
            className="button is-primary is-light box is-rounded"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            type="button"
            className="button is-primary is-light box is-rounded"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            className="button is-primary is-light box is-rounded"
            onClick={this.increase}
          >
            Add 1 (and 100)
          </button>
        </div>
      </div>
    );
  }
}

export default App;
