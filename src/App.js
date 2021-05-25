import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    number: 0,
  };

  addOne = () => {
    this.setState(state => (
      { number: state.number + 1 }));
  };

  add100 = () => {
    this.setState(state => ({
      number: state.number + 100,
    }));
  };

  increase = () => {
    const test = this.state.number % 5;

    if (test === 0) {
      this.addOne();
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    const { number } = this.state;

    return (
      <div className="container">
        <h1 className="title">
          Count:
          {' '}
          {number}
        </h1>

        <button
          className="button"
          type="button"
          onClick={() => this.addOne()}
        >
          Add 1
        </button>
        <button
          className="button"
          type="button"
          onClick={() => this.add100()}
        >
          Add 100
        </button>
        <button
          className="button"
          type="button"
          onClick={() => this.increase()}
        >
          Miracle
        </button>
      </div>
    );
  }
}

export default App;
