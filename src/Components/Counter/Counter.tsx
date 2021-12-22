import React from 'react';
import './Counter.scss';

type State = {
  count: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(state => (
      { count: state.count + 1 }
    ));
  };

  add100 = () => {
    this.setState(state => (
      { count: state.count + 100 }
    ));
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
      <div className="Counter">
        <h1 className="Counter__title">{`Count: ${count}`}</h1>
        <div className="Counter__buttons">
          <button
            type="button"
            className="Counter__button"
            onClick={this.addOne}
          >
            Add one
          </button>
          <button
            type="button"
            className="Counter__button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            className="Counter__button"
            onClick={this.increase}
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}
