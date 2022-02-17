import React from 'react';

import './App.scss';

type State = {
  count: number,
};

export class Count extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  add100 = () => {
    this.setState((state) => {
      return {
        count: state.count + 100,
      };
    });
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="main_container">
        <h1 className="header">
          Count:
          {this.state.count}
        </h1>
        <div className="container__button">
          <button
            className="button"
            type="button"
            onClick={() => this.addOne()}
          >
            Count +1
          </button>
          <button
            className="button"
            type="button"
            onClick={() => this.add100()}
          >
            Count +100
          </button>
          <button
            className="button"
            type="button"
            onClick={() => this.increase()}
          >
            (Count +1) || (Count +101)
          </button>
        </div>
      </div>
    );
  }
}
