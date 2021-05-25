import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  state = {
    value: 0,
  }

  addOne = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      value: prevState.value + 100,
    }));
  };

  increase = () => {
    if (this.state.value % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <>
        <h1 className="title">
          <i>
            Count: {this.state.value}
          </i>
        </h1>
        <button
          className="button"
          type="button"
          onClick={() => (this.addOne())}
        >
          Add 1
        </button>
        <button
          className="button"
          type="button"
          onClick={() => (this.add100())}
        >
          Add 100
        </button>
        <button
          className="button"
          type="button"
          onClick={() => (this.increase())}
        >
          Add 1 or 100
        </button>
      </>
    );
  }
}

export default Counter;
