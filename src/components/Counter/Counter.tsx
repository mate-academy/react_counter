import React from 'react';
import './Counter.scss';

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

  render() {
    const { count } = this.state;

    return (
      <div className="Counter">
        <h1 className="Counter__title">
          Count:
          {count}
        </h1>

        <button
          type="button"
          className="button__add"
          onClick={this.addOne}
        >
          Add one
        </button>

        <button
          type="button"
          className="button__add"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          className="button__add"
          onClick={() => {
            if (count % 5 === 0) {
              this.add100();
            }

            this.addOne();
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}
