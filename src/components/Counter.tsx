import React from 'react';

type State = {
  counter: number,
};

export class Counter extends React.Component<{}, State> {
  state: State = {
    counter: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div>
        <h1 className="title">
          Count:
          {' '}
          {this.state.counter}
        </h1>

        <div>
          <button
            type="button"
            className="button is-primary"
            onClick={this.addOne}
          >
            addOne
          </button>
          {' '}
          <button
            type="button"
            className="button is-info"
            onClick={this.add100}
          >
            add100
          </button>
          {' '}
          <button
            type="button"
            className="button is-warning"
            onClick={this.increase}
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}
