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
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1 className="Counter__count">
          {`Found stars: ${count}`}
        </h1>
        <div className="Counter__buttons">
          <button
            type="button"
            className="Counter__button"
            onClick={this.addOne}
          >
            One star
          </button>
          <button
            type="button"
            className="Counter__button"
            onClick={this.add100}
          >
            100 stars
          </button>
          <button
            type="button"
            className="Counter__button"
            onClick={this.increase}
          >
            AbraKadabra
          </button>
        </div>
      </>
    );
  }
}
