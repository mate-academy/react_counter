import React from 'react';

import './Counter.scss';

type State = {
  number: number,
};

class Counter extends React.Component<{}, State> {
  state: State = {
    number: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({ number: prevState.number + 1 }));
  };

  add100 = () => {
    this.setState((currState) => ({ number: currState.number + 100 }));
  };

  addOneOr100 = () => {
    const remainder = this.state.number % 5;

    if (remainder === 0) {
      this.add100();

      return;
    }

    this.addOne();
  };

  render() {
    return (
      <div className="Counter">
        <h1 className="Counter__title">
          Current number:
          {this.state.number}
        </h1>
        <button type="button" className="Counter__button" onClick={this.addOne}>
          Add 1
        </button>
        <button type="button" className="Counter__button" onClick={this.add100}>
          Add 100
        </button>
        <button type="button" className="Counter__button" onClick={this.addOneOr100}>
          Add 1 or 100
        </button>
      </div>
    );
  }
}

export default Counter;
