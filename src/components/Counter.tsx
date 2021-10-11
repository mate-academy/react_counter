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
    this.setState((prevCount) => ({
      count: prevCount.count + 1,
    }));
  };

  add100 = () => {
    this.setState((prevCount) => ({
      count: prevCount.count + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <h1 className="Counter__title">
          {`Count: ${this.state.count}`}
        </h1>
        <div className="Counter__buttons">
          <button
            className="Counter__button addOne"
            type="button"
            onClick={this.addOne}
          >
            add one
          </button>
          <button
            className="Counter__button add100"
            type="button"
            onClick={this.add100}
          >
            add 100
          </button>
          <button
            className="Counter__button increase"
            type="button"
            onClick={this.increase}
          >
            increase
          </button>
        </div>
      </>
    );
  }
}
