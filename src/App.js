import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  add100 = () => {
    this.setState(state => ({ count: state.count + 100 }));
  };

  increase = () => {
    this.addOne();
    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button type="button" onClick={() => this.addOne()}>
          Add One
        </button>
        <button type="button" onClick={() => this.add100()}>
          Add 100
        </button>
        <button type="button" onClick={() => this.increase()}>
          Increase
        </button>
      </>
    );
  }
}

export default App;
