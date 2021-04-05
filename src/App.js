import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    counter: 0,
    clickCount: 0,
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
    this.setState(({ clickCount, counter }) => {
      if (clickCount % 5 === 0 && clickCount !== 0) {
        return {
          counter: counter + 101,
          clickCount: clickCount + 1,
        };
      }

      return {
        counter: counter + 1,
        clickCount: clickCount + 1,
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
