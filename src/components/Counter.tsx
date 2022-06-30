import React from 'react';

type Props = {};

type State = {
  count: number;
};

export class Counter extends React.Component<Props, State> {
  state = {
    count: 0,
  };

  addOne = () => (
    this.setState((state) => (
      { count: state.count + 1 }
    ))
  );

  add100 = () => (
    this.setState((state) => (
      { count: state.count + 100 }
    ))
  );

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.addOne();
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    return (
      <div className="column is-half is-offset-one-quarter
      has-background-primary-light"
      >
        <h1 className="level level-item has-text-centered title">{`Count: ${this.state.count}`}</h1>

        <div className="level columns">
          <button
            type="button"
            onClick={this.addOne}
            className="button is-success is-light is-outlined"
          >
            Add 1
          </button>

          <button
            type="button"
            onClick={this.add100}
            className="button is-success is-light is-outlined"
          >
            Add 100
          </button>

          <button
            type="button"
            onClick={this.increase}
            className="button is-success is-light is-outlined"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
