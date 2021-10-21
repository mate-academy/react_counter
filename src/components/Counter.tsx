import React from 'react';

interface State {
  count: number;
}

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <h1 className="counter__title">
          {`Count: ${count}`}
        </h1>
        <button
          className="counter__btn"
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>
        <button
          className="counter__btn"
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>
        <button
          className="counter__btn"
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}
