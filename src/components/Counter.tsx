import React from 'react';

type State = {
  count: number
};

export class Counter extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  increase = (increaseValue: number) => {
    this.setState((currentState: State) => (
      { count: currentState.count + increaseValue }
    ));
  };

  addOne = () => {
    this.increase(1);
  };

  add100 = () => {
    this.increase(100);
  };

  addByCondition = () => {
    this.addOne();
    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>{`Count: ${count}`}</h1>
        <div>
          <button
            type="button"
            onClick={this.addOne}
          >
            Add one
          </button>
          <button
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            onClick={this.addByCondition}
          >
            Add by condition
          </button>
        </div>
      </>
    );
  }
}
