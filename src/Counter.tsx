import React from 'react';
import './Counter.scss';

type State = {
  count: number;
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  add100 = () => {
    this.setState((state) => {
      return { count: state.count + 100 };
    });
  };

  increase = () => {
    this.setState((state) => {
      if (state.count % 5 === 0) {
        this.addOne();
        this.add100();
      } else {
        this.addOne();
      }
    });
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

        <div className="button_list">
          <button
            type="button"
            className="button"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            className="button"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            className="button"
            onClick={this.increase}
          >
            Third button
          </button>
        </div>
      </>
    );
  }
}
