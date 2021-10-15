import React from 'react';
import { State } from '../type/State';

import './Counter.scss';

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
    this.setState((state) => {
      if (state.count % 5 === 0) {
        this.add100();
      }

      this.addOne();
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="Counter">
        <div className="Counter__title-container">
          <h1 className="Counter__title">
            {`Count: ${count}`}
          </h1>
        </div>
        <div className="Counter__buttons">
          <button
            className="Counter__button"
            type="button"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            className="Counter__button"
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            className="Counter__button"
            type="button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
