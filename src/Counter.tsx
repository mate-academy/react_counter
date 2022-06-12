import React from 'react';

type State = {
  count: number,
};

export class Counter extends React.Component<{}, State> {
  state: State = {
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
    return (
      <div className="
        container
        has-background-primary
        has-text-centered py-5"
      >
        <div>
          <h1 className="title is-1 py-3">
            Count:
            { ' ' }
            {this.state.count}
          </h1>
        </div>

        <div className="button-container-button">
          <button
            type="button"
            onClick={this.addOne}
            className="button is-warning mx-3"
          >
            Add 1
          </button>

          <button
            type="button"
            onClick={this.add100}
            className="button is-warning mx-3"
          >
            Add 100
          </button>

          <button
            type="button"
            onClick={this.increase}
            className="button is-warning mx-3"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
