import React from 'react';
import './Counter.scss';

interface State {
  count: number;
}

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    this.addOne();

    const { count } = this.state;

    if (count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <section className="Counter">
        <h1 className="Counter__count level-item title is-1">
          {count}
        </h1>
        <div className="Counter__buttons buttons are-medium level-item">
          <button
            type="button"
            className="Counter__button button is-success"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            className="Counter__button button is-warning"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            className="Counter__button button is-danger"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </section>
    );
  }
}
