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
    const { count } = this.state;

    if (count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  clearGoods = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="button__counter">
        <h1 className="button__output">
          Count:
          {count}
        </h1>
        <div className="button__container">
          <button
            type="button"
            className="button"
            onClick={this.addOne}
          >
            addOne
          </button>
          <button
            type="button"
            className="button"
            onClick={this.add100}
          >
            add100
          </button>
          <button
            type="button"
            className="button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
        <div className="button__container">
          <button
            type="button"
            className="button button__clear"
            onClick={() => this.clearGoods()}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}
