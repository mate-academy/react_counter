import React from 'react';

type State = {
  counter: number;
};

export class Counter extends React.Component<{}, State> {
  state: State = {
    counter: 0,
  };

  addOne = () => {
    this.setState((currentState) => ({
      counter: currentState.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((currentState) => ({
      counter: currentState.counter + 100,
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
      <>
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
      </>
    );
  }
}
