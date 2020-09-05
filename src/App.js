import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => ((this.state.count + 1) % 5 === 0
    ? (this.add100(), this.addOne())
    : this.addOne()
  );

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
          Count:
          {count}
        </h1>
        <button type="button" onClick={this.addOne}>addOne</button>
        <button type="button" onClick={this.add100}>add100</button>
        <button type="button" onClick={this.increase}>increase</button>
      </>
    );
  }
}

export default App;
