import React from 'react';

export class Counter extends React.Component<{}, { count: number }> {
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

    this.addOne();

    if (!(count % 5) && count !== 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="Counter">
        <h1 className="Counter__heading">
          Count:
          {' '}
          {count}
        </h1>
        <div className="Counter__buttons">
          <button
            className="Counter__button"
            type="button"
            onClick={this.addOne}
          >
            +1
          </button>
          <button
            className="Counter__button"
            type="button"
            onClick={this.add100}
          >
            +100
          </button>
          <button
            className="Counter__button"
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
