import React from 'react';
import 'bulma/css/bulma.min.css';
import './Counter.scss';

type State = {
  sum: number,
};

export class Counter extends React.Component<{}, State> {
  state: State = {
    sum: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      sum: state.sum + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      sum: state.sum + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.sum % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { sum } = this.state;

    return (
      <div className="box">
        <h1 className="title">
          {`Count: ${sum} `}
        </h1>
        <button type="button" className="box__button button is-primary" onClick={this.addOne}>
          Add 1
        </button>
        <button type="button" className="box__button button is-success" onClick={this.add100}>
          Add 100
        </button>
        <button type="button" className="box__button button is-info" onClick={this.increase}>
          Increase
        </button>
      </div>
    );
  }
}
