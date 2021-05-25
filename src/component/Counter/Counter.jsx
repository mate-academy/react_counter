import React from 'react';

export class Counter extends React.Component {
  state = {
    number: 0,
  };

  addOne = () => {
    this.setState(state => ({ number: state.number + 1 }));
  };

  add100 = () => {
    this.setState(state => ({ number: state.number + 100 }));
  };

  increase = () => {
    this.setState(({ number }) => {
      this.addOne();
      if (number % 5 === 0) {
        this.add100();
      }
    });
  };

  render() {
    const { number } = this.state;

    return (
      <>
        <h1>
          Count:
          {' '}
          {number}
        </h1>

        <button
          type="button"
          onClick={this.addOne}
        >
          Add +1
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          Add +100
        </button>

        <button
          type="button"
          onClick={this.increase}
        >
          increase
        </button>
      </>
    );
  }
}
