import React from 'react';

class Counter extends React.Component<{}, State> {
  state = {
    number: 0,
  };

  addOne = () => {
    this.setState(state => ({ number: state.number + 1 }));
  };

  addHundred = () => {
    this.setState(state => ({ number: state.number + 100 }));
  };

  increase = () => {
    this.addOne();

    if (this.state.number % 5 === 0) {
      this.addHundred();
    }
  };

  render() {
    return (
      <>
        <h1>{`Count: ${this.state.number}`}</h1>
        <button
          type="button"
          className="button"
          onClick={this.addOne}
        >
          add 1
        </button>
        <button
          type="button"
          className="button"
          onClick={this.addHundred}
        >
          add 100
        </button>
        <button
          type="button"
          className="button"
          onClick={this.increase}
        >
          increase
        </button>
      </>
    );
  }
}

type State = {
  number: number
};

export default Counter;
