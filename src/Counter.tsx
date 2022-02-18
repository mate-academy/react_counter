import React from 'react';

type State = {
  num: number;
};

export class Counter extends React.Component <{}, State> {
  state = {
    num: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      num: state.num + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      num: state.num + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.num % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { num } = this.state;

    return (
      <>
        <h1>{num}</h1>
        <div className="buttons">
          <button
            type="button"
            className="button"
            onClick={this.addOne}
          >
            addOne
          </button>
          <button
            type="button"
            className="button"
            onClick={this.add100}
          >
            add100
          </button>
          <button
            type="button"
            className="button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </>
    );
  }
}
