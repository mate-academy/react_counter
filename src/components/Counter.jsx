import React from 'react';

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
        <h1>
          Count:
          {' '}
          {this.state.value}
        </h1>
        <button
          type="button"
          onClick={() => (this.addOne())}
        >
          add 1
        </button>
        <button
          type="button"
          onClick={() => (this.add100())}
        >
          add 100
        </button>
        <button
          type="button"
          onClick={() => (this.increase())}
        >
          surprise
        </button>
      </>
    );
  }
}

export default Counter;
