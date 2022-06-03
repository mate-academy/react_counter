import React from 'react';

type State = {
  count: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
      count: prevState.count + 100,
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
      <div className="content is-large is-vcentered has-text-centered">
        <h1>{`Count: ${count}`}</h1>
        <button
          type="button"
          className="button is-medium is-primary mx-2"
          onClick={this.addOne}
        >
          Add 1
        </button>
        <button
          type="button"
          className="button is-medium is-warning mx-2"
          onClick={this.add100}
        >
          Add 100
        </button>
        <button
          type="button"
          className="button is-medium is-danger mx-2"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}
