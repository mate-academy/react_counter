import React from 'react';

import './Counter.scss';

type State = {
  count: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;

    const addOne = () => {
      this.setState((state) => ({
        count: state.count + 1,
      }));
    };

    const add100 = () => {
      this.setState((state) => ({
        count: state.count + 100,
      }));
    };

    const increase = () => {
      if (this.state.count % 5 === 0 && this.state.count !== 0) {
        add100();
      }

      addOne();
    };

    return (
      <div className="Counter__app">
        <h1 className="Counter__value">
          Count:
          {count}
        </h1>
        <button className="button add__one" type="button" onClick={addOne}>
          Add one
        </button>
        <button className="button add__100" type="button" onClick={add100}>
          Add 100
        </button>
        <button className="button increase" type="button" onClick={increase}>
          Increase
        </button>
      </div>
    );
  }
}
