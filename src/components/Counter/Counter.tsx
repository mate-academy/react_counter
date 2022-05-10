import React from 'react';
import './Counter.scss';

type Props = {};

type State = {
  count: number,
};

export class Counter extends React.Component<Props, State> {
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
        <div className="counter__add">
          <button
            type="button"
            className="counter__button add__button"
            onClick={() => this.addOne()}
          >
            Add one
          </button>
          <button
            type="button"
            className="counter__button add__button"
            onClick={() => this.add100()}
          >
            Add 100
          </button>
        </div>

        <button
          type="button"
          className="counter__button random__button"
          onClick={() => this.increase()}
        >
          Add one + 100
        </button>
      </>
    );
  }
}
