import React from 'react';
import './Counter.scss';

type State = {
  counter: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  add100 = () => {
    this.setState((state) => ({ counter: state.counter + 100 }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h1>{`Count: ${counter}`}</h1>
        <div className="controler">
          <button
            className="controler__button controler__button__add1"
            type="button"
            onClick={this.addOne}
          >
            Add one
          </button>

          <button
            className="controler__button controler__button__add100"
            type="button"
            onClick={this.add100}
          >
            Add100
          </button>

          <button
            className="controler__button controler__button__increase"
            type="button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>

      </div>
    );
  }
}
