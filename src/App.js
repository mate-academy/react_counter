import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    this.setState((state) => {
      const incrementedValue = state.counter % 5 === 0
        ? state.counter + 101
        : state.counter + 1;

      return ({
        counter: incrementedValue,
      });
    });
  };

  render() {
    const { counter } = this.state;

    return (
      <>
        <h1>
          {`Count: ${counter}`}
        </h1>
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
          Add hundred
        </button>
        <button
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </>
    );
  }
}

export default App;
