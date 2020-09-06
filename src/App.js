import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  add1 = () => {
    this.setState(state => ({ count: state.count + 1 }));
  }

  add100 = () => {
    this.setState(state => ({ count: state.count + 100 }));
  };

  increase = () => {
    this.add1();
    this.setState((state) => {
      if (state.count % 5 === 0) {
        this.add100();
      }
    });
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button
          type="button"
          onClick={this.add1}
        >
          Add 1
        </button>
        <button
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>
        <button
          type="button"
          onClick={this.increase}
        >
          Add 1 (and 100 if factor of 5)
        </button>
      </>
    );
  }
}

export default App;
