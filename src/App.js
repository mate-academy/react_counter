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
    if (this.state.count % 5 === 0) {
      this.add100();
    };

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="app">
        <h1>
          Count:
          {count}
        </h1>
        <button
          type="button"
          className="btn"
          onClick={this.addOne}
        >
          add one
        </button>

        <button
          type="button"
          className="btn"
          onClick={this.add100}
        >
          add 100
        </button>

        <button
          type="button"
          className="btn"
          onClick={this.increase}
        >
          increase
        </button>
      </div>
    );
  }
}

export default App;
