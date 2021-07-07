import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    counter: 0,
  }

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
    this.setState((state) => {
      if (state.counter % 5 === 0) {
        this.add100();
      }

      this.addOne();
    });
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="counter">
        <h1 className="counter__heading">
          Count:
          {' '}
          {counter}
        </h1>

        <button
          type="button"
          className="counter__button"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          type="button"
          className="counter__button"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          className="counter__button"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
