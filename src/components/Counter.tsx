import React from 'react';

type State = {
  counter: number,
};
export class Counter extends React.Component<{}, State> {
  state = {
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
    const { counter } = this.state;

    this.addOne();

    if ((counter % 5 === 0) && (counter > 0)) {
      this.add100();
    }
  };

  render() {
    const { counter } = this.state;

    return (
      <>
        <div className="App">
          <h1 className="Counter">
            {'Counter is: '}
            {counter}
          </h1>
          <div className="button">
            <button
              type="button"
              className="button__item"
              onClick={this.addOne}
            >
              +1
            </button>
            <button
              type="button"
              className="button__item"
              onClick={this.add100}
            >
              +100
            </button>
            <button
              type="button"
              className="button__item"
              onClick={() => this.increase()}
            >
              incress
            </button>
          </div>
        </div>
      </>
    );
  }
}
