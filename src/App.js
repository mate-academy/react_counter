import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  add100 = () => {
    this.setState(({ counter }) => ({
      counter: counter + 100,
    }));
  };

  increase = () => {
    this.setState(({ counter }) => {
      if (counter % 5 === 0) {
        return {
          counter: counter + 100,
        };
      }

      return {
        counter: counter + 1,
      };
    });
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.counter}
        </h1>
        <button
          type="button"
          onClick={this.addOne}
        >
          addOne
        </button>
        <button
          type="button"
          onClick={this.add100}
        >
          add100
        </button>
        <button
          type="button"
          onClick={this.increase}
        >
          increase
        </button>
      </>
    );
  }
}

export default App;
