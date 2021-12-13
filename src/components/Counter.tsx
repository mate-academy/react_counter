import React from 'react';

type State = {
  count: number;
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1 className="title">
          Count:
          {` ${count}`}
        </h1>
        <div className="button">
          <button
            type="button"
            onClick={this.addOne}
            className="button__item"
          >
            Add 1
          </button>
          <button
            type="button"
            onClick={this.add100}
            className="button__item"
          >
            Add 100
          </button>
          <button
            type="button"
            onClick={this.increase}
            className="button__item"
          >
            Add some more
          </button>
        </div>
      </div>
    );
  }
}
