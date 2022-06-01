import React from 'react';
import './App.scss';

type State = {
  counter: number,
};

class Сounter extends React.Component<{}, State> {
  state = {
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
    this.setState((state) => {
      if (state.counter % 5 === 0) {
        this.addOne();
        this.add100();
      } else {
        this.addOne();
      }
    });
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="counter">
        <h1>{`Count: ${counter}`}</h1>

        <div className="counter__buttons">
          <button
            className="button is-primary is-outlined"
            type="button"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            className="button is-link is-outlined"
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            className="button is-info is-outlined"
            type="button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>

      </div>

    );
  }
}

export default Сounter;
