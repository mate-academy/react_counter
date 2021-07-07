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
    this.addOne();

    if ((this.state.count) % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>{`Count: ${count}`}</h1>
        <button
          type="button"
          className="addButton"
          onClick={this.addOne}
        >
          +1
        </button>

        <button
          type="button"
          className="addButton"
          onClick={this.add100}
        >
          +100
        </button>

        <button
          type="button"
          className="addButton"
          onClick={this.increase}
        >
          Increase
        </button>
      </>
    );
  }
}

export default App;
