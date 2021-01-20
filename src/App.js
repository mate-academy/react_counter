import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    counter: 0,
  };

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
    (this.state.counter % 5 === 0)
      ? this.add100()
      : this.addOne();
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="counter">
        <h1>
          Count:
          {counter}
        </h1>
        <div className="wrapper">
          <button
            onClick={this.addOne}
            className="button"
            type="button"
          >
            One
          </button>
          <button
            onClick={this.add100}
            className="button"
            type="button"
          >
            100
          </button>
          <button
            onClick={this.increase}
            className="button"
            type="button"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
