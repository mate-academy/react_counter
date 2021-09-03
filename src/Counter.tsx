import React from 'react';

type State = {
  count: number;
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  add1 = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  add100 = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 100 };
    });
  };

  weirdAdd = () => {
    this.setState((prevState) => {
      const { count } = prevState;
      const newCount = count % 5 === 0 ? count + 101 : count + 1;

      return { count: newCount };
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <h1 className="counter__heading">
          {'Count: '}
          {count}
        </h1>

        <button
          type="button"
          className="counter__button--1"
          onClick={this.add1}
        >
          Add 1
        </button>

        <button
          type="button"
          className="counter__button--2"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          className="counter__button--3"
          onClick={this.weirdAdd}
        >
          Just try it
        </button>
      </div>
    );
  }
}
