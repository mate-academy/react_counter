import React from 'react';

type State = {
  counter: number,
};

class Counter extends React.Component<{}, State> {
  state: State = {
    counter: 0,
  };

  addOne = () => {
    this.setState((prevSate) => {
      return {
        counter: prevSate.counter + 1,
      };
    });
  };

  add100 = () => {
    this.setState((prevSate) => {
      return {
        counter: prevSate.counter + 100,
      };
    });
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.counter}
        </h1>

        <button
          type="button"
          onClick={this.addOne}
        >
          adds 1
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          adds 100
        </button>

        <button
          type="button"
          onClick={this.increase}
        >
          addOne
        </button>
      </>
    );
  }
}

export default Counter;
