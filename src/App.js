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

  increase = () => {
    if ((this.state.count + 1) % 5 === 0 && this.state.count !== 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <>
        <h1>{`Count: ${this.state.count}`}</h1>
        <button type="button" onClick={this.addOne}>+1</button>
        <button type="button" onClick={this.add100}>+100</button>
        <button type="button" onClick={this.increase}>divisible by 5</button>
      </>
    );
  }
}

export default App;
