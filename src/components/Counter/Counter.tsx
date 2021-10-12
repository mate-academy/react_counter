import React from 'react';

interface State {
  count: number;
}

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  add100 = () => {
    this.setState(({ count }) => ({ count: count + 100 }));
  };

  increase = () => {
    const { count } = this.state;

    if (count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    const increaseBtnText = count % 5 === 0
      ? '+101'
      : '+1';

    return (
      <>
        <h1>{`Count: ${count}`}</h1>

        <button
          type="button"
          onClick={this.addOne}
        >
          +1
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          +100
        </button>

        <button
          type="button"
          onClick={this.increase}
        >
          {increaseBtnText}
        </button>
      </>
    );
  }
}
