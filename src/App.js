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
    if (this.state.count % 5 !== 0) {
      this.setState(state => ({
        count: state.count + 1,
      }));
    } else {
      this.setState(state => ({
        count: state.count + 101,
      }));
    }
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>{`Count: ${count}`}</h1>
        <button
          type="button"
          onClick={this.addOne}
        >
          Add one
        </button>
        <button
          type="button"
          onClick={this.add100}
        >
          Add hundred
        </button>
        <button
          type="button"
          onClick={this.increase}
        >
          Add increase
        </button>
      </>
    );
  }
}

export default App;
