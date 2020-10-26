import React from 'react';
import './Counter.scss';

export class Counter extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => {
    const { count } = this.state;

    if (count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="counter">
        <h1 className="counter__header">
          {`Count: ${this.state.count}`}
        </h1>

        <div className="counter__buttons">
          <button
            type="button"
            onClick={this.addOne}
            className="counter__button"
          >
            Add 1
          </button>

          <button
            type="button"
            onClick={this.add100}
            className="counter__button"
          >
            Add 100
          </button>

          <button
            type="button"
            onClick={this.increase}
            className="counter__button"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
