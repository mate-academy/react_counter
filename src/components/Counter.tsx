import React from 'react';

type State = {
  count: number,
};

export class Counter extends React.Component<{}, State> {
  state:State = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  add100 = () => {
    this.setState((prevState) => ({ count: prevState.count + 100 }));
  };

  increase = () => {
    this.addOne();
    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="container pt-6 is-6">
        <h1 className="title">
          {this.state.count}
        </h1>
        <button
          type="button"
          onClick={() => (this.addOne())}
          className="button is-warning is-outlined"
        >
          Add 1
        </button>
        <button
          type="button"
          onClick={() => (this.add100())}
          className="button is-info is-outlined"
        >
          Add 100
        </button>
        <button
          type="button"
          onClick={() => (this.increase())}
          className="button is-dark is-outlined"
        >
          Increase
        </button>
      </div>
    );
  }
}
