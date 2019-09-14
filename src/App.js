import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
      counter: 0,
    };

  increment = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  decrement = () => {
    this.setState(prevState => (prevState.counter > 0
      ? { counter: prevState.counter - 1 }
      : { counter: 0 }));
  }

  reset = () => {
    this.setState(() => ({
      counter: 0,
    }));
  }

  render() {
    const { increment, decrement, reset } = this;

    return (
      <div className="wrapper">
        <div className="counter">
          Counter: {this.state.counter}
        </div>
        <button
          className="button"
          type="button"
          onClick={increment}
        >
          Increase!
        </button>
        <button
          className="button"
          type="button"
          onClick={decrement}
        >
          Decrease!
        </button>
        <button
          className="button"
          type="button"
          onClick={reset}
        >
          Reset!
        </button>
      </div>
    );
  }
}

export default App;
