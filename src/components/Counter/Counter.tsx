import React from 'react';
import '../Counter/Counter.scss';

type State = {
  count: number;
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
    const { count } = this.state;

    this.addOne();

    if (count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="Counter">
        <h1 className="Counter__title">{`Count: ${this.state.count}`}</h1>
        <button type="button" className="Counter__button" onClick={this.addOne}>
          Add 1
        </button>

        <button type="button" className="Counter__button" onClick={this.add100}>
          Add 100
        </button>

        <button
          type="button"
          className="Counter__button"
          onClick={this.increase}
        >
          Add 1 or more
        </button>
      </div>
    );
  }
}
