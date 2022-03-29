import { Component } from 'react';

interface State {
  currentValue: number;
}

export class Counter extends Component<{}, State> {
  state = {
    currentValue: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      currentValue: state.currentValue + 1,
    }));
  };

  addHundred = () => {
    this.setState((state) => ({
      currentValue: state.currentValue + 100,
    }));
  };

  increase = () => {
    const { currentValue } = this.state;

    this.addOne();

    if (currentValue % 5 === 0) {
      this.addHundred();
    }
  };

  render() {
    const { currentValue } = this.state;

    return (
      <>
        <h1>{`Count: ${currentValue}`}</h1>

        <button type="button" onClick={this.addOne}>
          Add 1
        </button>

        <button type="button" onClick={this.addHundred}>
          Add 100
        </button>

        <button type="button" onClick={this.increase}>
          Increase
        </button>
      </>
    );
  }
}
