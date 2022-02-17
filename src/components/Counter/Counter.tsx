import React from 'react';

type State = {
  count: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  render() {
    const addOne = () => {
      this.setState((state) => ({
        count: state.count + 1,
      }));
    };

    const add100 = () => {
      this.setState((state) => ({
        count: state.count + 100,
      }));
    };

    const increase = () => {
      if (this.state.count % 5 === 0 && this.state.count !== 0) {
        add100();
      }

      addOne();
    };

    return (
      <div className="counter">
        <h1 className="counter__score">{this.state.count}</h1>
        <button
          type="button"
          onClick={addOne}
        >
          1
        </button>
        <button
          type="button"
          onClick={add100}
        >
          100
        </button>
        <button
          type="button"
          onClick={increase}
        >
          increase
        </button>
      </div>
    );
  }
}
