import React from 'react';

type State = {
  count: number,
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

  addHundred = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.addHundred();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <h1 className="counter__content">
          Counter:
          {count}
        </h1>

        <div className="counter__buttonContainer">
          <button
            type="button"
            className="counter__button"
            onClick={this.addOne}
          >
            ADD 1
          </button>

          <button
            type="button"
            className="counter__button"
            onClick={this.addHundred}
          >
            Add 100
          </button>

          <button
            type="button"
            className="counter__button"
            onClick={this.increase}
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}
