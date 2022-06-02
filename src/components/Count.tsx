import React from 'react';

import './Count.scss';

type State = {
  count: number;
};

export class Count extends React.Component<{}, State> {
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
    return (
      <div className="count__container">
        <h1>
          {`Count: ${this.state.count}`}
        </h1>
        <div className="button__container">
          <button
            className="button is-primary"
            type="button"
            onClick={this.addOne}
          >
            add one
          </button>
          <button
            className="button is-link"
            type="button"
            onClick={this.add100}
          >
            add 100
          </button>
          <button
            className="button is-info"
            type="button"
            onClick={this.increase}
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}
