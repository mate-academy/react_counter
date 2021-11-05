import React from 'react';
import { State } from '../types/State';
import { Props } from '../types/Props';

export class Counter extends React.Component<Props, State> {
  state: State = {
    number: 0,
  };

  addOne = () => {
    this.setState((prevNumber) => ({
      number: prevNumber.number + 1,
    }));
  };

  add100 = () => {
    this.setState((prevNumber) => ({
      number: prevNumber.number + 100,
    }));
  };

  increase = () => {
    this.setState((prevNumber) => ({
      number: prevNumber.number + 101,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>
          Counter:
          {' '}
          {this.state.number}
        </h1>

        <button
          type="button"
          onClick={this.addOne}
        >
          Number 1
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          Number 2
        </button>

        <button
          type="button"
          onClick={(this.state.number % 5 === 0 && this.state.number > 0)
            ? this.increase
            : this.addOne}
        >
          Number 3
        </button>
      </div>
    );
  }
}
