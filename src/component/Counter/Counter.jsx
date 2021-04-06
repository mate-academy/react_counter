import React from 'react';
import './counter.scss';

export class Counter extends React.Component {
  state = {
    result: 0,
    count: 0,
  }

  addOne = () => {
    this.setState(prevState => ({
      result: prevState.result + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      result: prevState.result + 100,
    }));
  };

  resetResult = () => {
    this.setState({
      result: 0,
    });
  }

  increase = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));

    if (this.state.count % 5 === 0) {
      this.addOne();
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    const { result } = this.state;

    return (
      <section className="counter">
        <h1 className="counter__title">
          Count:
          {' '}
          {' '}
          <span className="counter__number">
            {result}
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
            onClick={this.resetResult}
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
