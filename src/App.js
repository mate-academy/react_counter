import React from 'react';
import './App.scss';

class App extends React.Component {
  addOne = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      value: prevState.value + 100,
    }));
  };

  increase = () => {
    if (this.state.value % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <Counter />
    );
  }
}

class Counter extends App {
  state = {
    value: 0,
  }

  render() {
    return (
      <>
        <h1>
          Count:
          {' '}
          {this.state.value}
        </h1>
        <button
          type="button"
          onClick={() => (this.addOne())}
        >
          add 1
        </button>
        <button
          type="button"
          onClick={() => (this.add100())}
        >
          add 100
        </button>
        <button
          type="button"
          onClick={() => (this.increase())}
        >
          surprise
        </button>
      </>
    );
  }
}

export default App;
