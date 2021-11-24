import React from 'react';

import './Counter.scss';

type State = {
  count: number;
};

export class Counter extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  incrementByOne = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  incrementBy100 = () => {
    this.setState((state) => {
      return {
        count: state.count + 100,
      };
    });
  };

  increment = () => {
    this.incrementByOne();

    if (this.state.count % 5 === 0) {
      this.incrementBy100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <article className="Counter">
        <div className="Counter__overlay">
          <h1 className="Counter__count">{`Count:${count}`}</h1>
        </div>

        <div className="Counter__API">
          <button
            className="Counter__button"
            type="button"
            onClick={this.incrementByOne}
          >
            Add 1
          </button>
          <button
            className="Counter__button"
            type="button"
            onClick={this.incrementBy100}
          >
            Add 100
          </button>
          <button
            className="Counter__button"
            type="button"
            onClick={this.increment}
          >
            Magic Button
          </button>
        </div>
      </article>
    );
  }
}
