/* eslint-disable no-console */
import React from 'react';
import './App.scss';

type State = {
  counter: number;
};
class App extends React.Component<{}, State> {
  state: State = {
    counter: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.counter % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { counter } = this.state;
    const { addOne, add100, increase } = this;

    return (
      <div className="container">
        <div className="counter">
          <h1>{`Count: ${counter}`}</h1>
          <div className="counter-btn-wrap">
            <button
              className="counter__btn"
              type="button"
              onClick={addOne}
            >
              add 1
            </button>
            <button
              className="counter__btn"
              type="button"
              onClick={add100}
            >
              add 100
            </button>
            <button
              className="counter__btn"
              type="button"
              onClick={increase}
            >
              increase
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
