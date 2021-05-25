import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(prev => ({
      counter: prev.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(prev => ({
      counter: prev.counter + 100,
    }));
  };

  increase = () => {
    this.setState(prev => ({
      counter: prev.counter % 5 === 0
        ? (
          prev.counter + 101
        )
        : (
          this.addOne
        ),
    }));
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="app">
        <h1>{`Count: ${counter}`}</h1>
        <button
          type="button"
          onClick={this.addOne}
        >
          Add one
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
