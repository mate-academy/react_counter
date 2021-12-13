import React from 'react';
import './Counter.scss';

interface State {
  counter: number;
}

export class Counter extends React.Component<{}, State> {
  state : State = {
    counter: 0,
  };

  addOne = () => {
    this.setState((state: State) => {
      return {
        counter: state.counter + 1,
      };
    });
  };

  add100 = () => {
    this.setState((state: State) => {
      return {
        counter: state.counter + 100,
      };
    });
  };

  increase = () => {
    this.setState((state: State) => {
      return state.counter % 5 === 0
        ? { counter: state.counter + 101 }
        : { counter: state.counter + 1 };
    });
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="counter">
        <h1>
          {'Count: '}
          {counter}
        </h1>

        <div className="button-conteiner">
          <button
            type="button"
            className="btn"
            onClick={this.addOne}
          >
            add 1
          </button>
          <button
            type="button"
            className="btn"
            onClick={this.add100}
          >
            add 100
          </button>

          <button
            type="button"
            className="btn"
            onClick={this.increase}
          >
            special adder
          </button>
        </div>
      </div>
    );
  }
}
