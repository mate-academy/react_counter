import React from 'react';
import './Counter.scss';

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
      <div className="container.is-widescreen
        has-background-grey-lighter
        has-text-centered
        py-5"
      >
        <h1 className="title is-2">
          Count:
          {` ${count}`}
        </h1>

        <div>
          <button
            type="button"
            onClick={this.addOne}
            className="button
              is-info
              is-light
              is-large
              mx-4"
          >
            Add 1
          </button>
          <button
            type="button"
            onClick={this.add100}
            className="button
              is-info
              is-light
              is-large
              mx-4"
          >
            Add 100
          </button>
          <button
            type="button"
            onClick={this.increase}
            className="button
              is-info
              is-light
              is-large
              mx-4"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
