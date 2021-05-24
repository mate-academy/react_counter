import React from 'react';

export class Counter extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  add100 = () => {
    this.setState(({ counter }) => ({
      counter: counter + 100,
    }));
  };

  increase = () => {
    this.setState(({ counter }) => {
      this.addOne();
      if (counter % 5 === 0) {
        this.add100();
      }
    });
  };

  render() {
    return (
      <>
        <h1>{`Count: ${this.state.counter}`}</h1>

        <button type="button" onClick={this.addOne}>
          Add one
        </button>

        <button type="button" onClick={this.add100}>
          Add 100
        </button>

        <button type="button" onClick={this.increase}>
          Increace
        </button>
      </>
    );
  }
}
