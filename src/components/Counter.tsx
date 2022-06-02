import React from 'react';

type State = {
  count: number;
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
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="main">
        <div className="main__container">
          <img src="images/mate-logo.png" alt="logo" className="logo" />
          <h1>
            Count:
            {this.state.count}
          </h1>
        </div>

        <div>
          <button
            type="button"
            onClick={this.addOne}
            className="button"
          >
            Add 1
          </button>

          <button
            type="button"
            onClick={this.add100}
            className="button"
          >
            Add 100
          </button>

          <button
            type="button"
            onClick={this.increase}
            className="button"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
