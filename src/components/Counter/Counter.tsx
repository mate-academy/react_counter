import React from 'react';
import './Counter.scss';

interface State {
  currentCount: number,
}

class Counter extends React.Component<{}, State> {
  state = {
    currentCount: 0,
  };

  addOne = () => {
    this.setState((prevState) => {
      return {
        currentCount: prevState.currentCount + 1,
      };
    });
  };

  add100 = () => {
    this.setState((prevState) => {
      return {
        currentCount: prevState.currentCount + 100,
      };
    });
  };

  increase = () => {
    this.setState((prevState) => {
      if (prevState.currentCount % 5 === 0) {
        this.add100();
      }

      return {
        currentCount: prevState.currentCount + 1,
      };
    });
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {` ${this.state.currentCount}`}
        </h1>
        <button
          type="button"
          onClick={this.addOne}
        >
          AddOne
        </button>
        <button
          type="button"
          onClick={this.add100}
        >
          Add100
        </button>
        <button
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </>
    );
  }
}

export default Counter;
