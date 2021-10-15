import React from 'react';

type State = {
  count: number
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
      <div>
        <h1>
          Count:
          {count}
        </h1>
        <div>
          <button
            type="button"
            onClick={this.addOne}
          >
            1
          </button>
          <button
            type="button"
            onClick={this.add100}
          >
            2
          </button>
          <button
            type="button"
            onClick={this.increase}
          >
            3
          </button>
        </div>
      </div>
    );
  }
}
