import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

type State = {
  currentNumber: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    currentNumber: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      currentNumber: state.currentNumber + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      currentNumber: state.currentNumber + 100,
    }));
  };

  increase = () => {
    if (this.state.currentNumber % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { currentNumber } = this.state;

    return (
      <div className="d-flex justify-content-center">
        <h1 className="me-5">{`Count: ${currentNumber}`}</h1>

        <button
          type="button"
          onClick={this.addOne}
          className="
            me-2
            col
            col-lg-2
            border-0
            rounded
            shadow-sm
            btn
            btn-outline-secondary"
        >
          Add 1
        </button>

        <button
          type="button"
          onClick={this.add100}
          className="
            me-2
            col
            col-lg-2
            border-0
            rounded
            shadow-sm
            btn
            btn-outline-secondary"
        >
          Add 100
        </button>

        <button
          type="button"
          onClick={this.increase}
          className="
            me-2
            col
            col-lg-2
            border-0
            rounded
            shadow-sm
            btn
            btn-outline-secondary"
        >
          Increase
        </button>
      </div>
    );
  }
}
