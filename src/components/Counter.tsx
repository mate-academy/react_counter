import React from 'react';

type State = {
  count: number,
};

export class Counter extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  add100 = () => {
    this.setState((state) => {
      return {
        count: state.count + 100,
      };
    });
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }

    return this.state;
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
          Count:
          {' '}
          {count}
        </h1>
        <div className="buttons">
          <button
            type="submit"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            type="submit"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="submit"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </>
    );
  }
}
