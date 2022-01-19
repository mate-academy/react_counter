import React from 'react';

type State = {
  count: number;
};

export class Counter extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  add100 = () => {
    this.setState(({ count }) => ({ count: count + 100 }));
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
      <div>
        <h1>{`Count: ${count}`}</h1>
        <button
          type="button"
          onClick={this.addOne}
        >
          add 1
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          add 100
        </button>

        <button
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}
