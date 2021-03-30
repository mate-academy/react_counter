import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  };

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
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  reset = () => {
    this.setState(state => ({
      count: 0,
    }));
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">{`Count: ${this.state.count}`}</h1>
        <button
          type="button"
          className="btn add1"
          onClick={this.addOne}
        >
          Add 1
        </button>
        <button
          type="button"
          className="btn add100"
          onClick={this.add100}
        >
          Add 100
        </button>
        <button
          type="button"
          className="btn divide"
          onClick={this.increase}
        >
          Divisible
        </button>
        <button
          type="button"
          className="btn reset"
          onClick={this.reset}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default App;
