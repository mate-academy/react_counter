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
    this.add100();
    if (this.state.counter % 5 === 0) {
      this.addOne();
    }
  };

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button type="button" onClick={this.addOne}>
          add one
        </button>
        <button type="button" onClick={this.add100}>
          add 100
        </button>
        <button type="button" onClick={this.increase}>
          increase
        </button>
      </>
    );
  }
}

export default App;
