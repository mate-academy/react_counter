import React, { Props } from 'react';
import './Counter.scss';

export class Counter extends React.Component<Props<State>, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.state.count += 1;

    this.setState((prevState: State) => {
      return {
        count: prevState.count,
      };
    });
  };

  add100 = () => {
    this.state.count += 100;

    this.setState((prevState: State) => {
      return {
        count: prevState.count,
      };
    });
  };

  increase = () => {
    this.addOne();

    if ((this.state.count - 1) % 5 === 0) {
      this.add100();
    }

    this.setState((prevState: State) => {
      return {
        count: prevState.count,
      };
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="Counter">
        <h1 className="Counter__title">
          {`Count: ${count}`}
        </h1>
        <div className="Counter__buttons">
          <button
            type="button"
            onClick={this.addOne}
            className="Counter__button"
          >
            Add 1
          </button>
          <button
            type="button"
            onClick={this.add100}
            className="Counter__button"
          >
            Add 100
          </button>
          <button
            type="button"
            onClick={this.increase}
            className="Counter__button"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
