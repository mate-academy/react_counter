import React from 'react';
import './Counter.scss';

type State = {
  counter: number,
};

export class Counter extends React.Component<{}, State> {
  state: Readonly<State> = {
    counter: 0,
  };

  addOne = () => {
    this.setState((state) => {
      return { counter: state.counter + 1 };
    });
  };

  add100 = () => {
    this.setState((state) => {
      return { counter: state.counter + 100 };
    });
  };

  increase = () => {
    const { counter } = this.state;

    this.addOne();

    if (counter % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="counter app__counter">
        <h1 className="counter__title">{`Count: ${counter}`}</h1>
        <div className="counter__buttons">
          <button
            type="button"
            className="counter__button button"
            onClick={() => this.addOne()}
          >
            Add 1
          </button>

          <button
            type="button"
            className="counter__button button"
            onClick={() => this.add100()}
          >
            Add 100
          </button>

          <button
            type="button"
            className="counter__button button"
            onClick={() => this.Increase()}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
