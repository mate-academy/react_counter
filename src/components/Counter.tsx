import React from 'react';
import './Counter.scss';

type State = {
  initial: number;
};

export class Counter extends React.Component<{}, State> {
  state = {
    initial: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      initial: prevState.initial + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
      initial: prevState.initial + 100,
    }));
  };

  increase = () => {
    if (this.state.initial % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  reset = () => {
    this.setState({ initial: 0 });
  };

  render() {
    return (
      <div>
        <div className="card">
          <h1>
            {`Count: ${this.state.initial}`}
          </h1>

          <div>
            <button
              type="button"
              onClick={this.addOne}
              className="card-button"
            >
              Add one
            </button>

            <button
              type="button"
              onClick={this.add100}
              className="card-button"
            >
              Add 100
            </button>

            <button
              type="button"
              onClick={this.increase}
              className="card-button"
            >
              Add one + extra
            </button>

            <button
              type="button"
              onClick={this.reset}
              className="card-button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}
