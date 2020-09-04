import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(state => (
      { counter: state.counter + 1 }
    ));
  };

  add100 = () => {
    this.setState(state => (
      { counter: state.counter + 100 }
    ));
  };

  increase = () => {
    if ((this.state.counter + 1) % 5 === 0) {
      this.setState(state => (
        { counter: state.counter + 101 }
      ));
    } else {
      this.setState(state => (
        { counter: state.counter + 1 }
      ));
    }
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
