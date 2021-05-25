import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  // just practicing different ways of solution
  add100 = () => {
    this.setState(({ counter }) => ({
      counter: counter + 100,
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
      <div className="field">
        <h1>
          {`Count: ${this.state.counter}`}
        </h1>
        <button
          className="button"
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>
        <button
          className="button"
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>
        <button
          className="button"
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
