import React from 'react';
import './counter.scss';

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

  resetCount = () => {
    this.setState({
      count: 0,
    });
  }

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <section className="counter">
        <h1 className="counter__title">
          Count:
          <span className="counter__number">
            {count}
          </span>
        </h1>
        <div className="counter__wrapper">
          <button
            onClick={this.addOne}
            className="counter__btn"
            type="button"
          >
            Add one
          </button>
          <button
            onClick={this.add100}
            className="counter__btn"
            type="button"
          >
            Add 100
          </button>
          <button
            onClick={this.increase}
            className="counter__btn"
            type="button"
          >
            Increase
          </button>
          <button
            onClick={this.resetCount}
            className="counter__btn"
            type="button"
          >
            Reset
          </button>
        </div>
      </section>
    );
  }
}
