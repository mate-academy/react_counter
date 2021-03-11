import React from 'react';

export class Counter extends React.Component {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { counter } = this.state;

    return (
      <>
        <h1>
          {'Counter: '}
          {counter}
        </h1>

        <button
          type="button"
          onClick={(prevState) => {
            this.addOne(prevState);
          }}
        >
          Add 1
        </button>

        <button
          type="button"
          onClick={(prevState) => {
            this.add100(prevState);
          }}
        >
          Add 100
        </button>

        <button
          type="button"
          onClick={(prevState) => {
            this.increase(prevState);
          }}
        >
          Increase
        </button>
      </>
    );
  }
}
