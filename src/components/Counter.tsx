import { Component } from 'react';

import './Counter.scss';

export class Counter extends Component<{}, { count: number }> {
  state = {
    count: 0,
  };

  addOne = (
    { currentTarget }: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    this.setState((state) => ({
      count: state.count + 1,
    }));

    const checkClass = currentTarget.classList.contains('button--magic');

    if (checkClass && this.state.count % 5 === 0) {
      this.add100();
    }
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="Counter">
        <h1>{`Count: ${count}`}</h1>

        <button
          className="button"
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          className="button"
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          className="button button--magic"
          type="button"
          onClick={(event) => {
            this.addOne(event);
          }}
        >
          Add magic
        </button>
      </div>
    );
  }
}
