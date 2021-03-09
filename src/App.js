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
    this.addOne();
    if (this.state.counter % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.counter}
        </h1>
        <button type="button" onClick={this.addOne}>Add one</button>
        <button type="button" onClick={this.add100}>Add 100</button>
        <button type="button" onClick={this.increase}>Increase</button>
      </>
    );
  }
}

export default App;
