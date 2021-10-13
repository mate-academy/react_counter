import React from 'react';

type State = {
  count: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  add100 = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 100,
      };
    });
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
      <div className="counter">
        <h1 className="counter__title">
          {`Count: ${count}`}
        </h1>
        <button
          type="button"
          className="counter__button"
          onClick={this.addOne}
        >
          +1
        </button>
        <button
          type="button"
          className="counter__button"
          onClick={this.add100}
        >
          +100
        </button>
        <button
          type="button"
          className="counter__button"
          onClick={this.increase}
        >
          +1 or +101
        </button>
      </div>
    );
  }
}
