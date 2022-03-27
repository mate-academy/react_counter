import React from 'react';

type Props = {};

type State = {
  age: number,
};

export class Counter extends React.Component<Props, State> {
  state = {
    age: 0,
  };

  addOne = () => {
    this.setState(state => ({
      age: state.age + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      age: state.age + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.age % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      (
        <>
          <h1>
            {`Count: ${this.state.age}`}
          </h1>

          <button
            type="button"
            className="button-23"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            className="button-23"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            className="button-23"
            onClick={this.increase}
          >
            Broken button
          </button>
        </>
      )
    );
  }
}
