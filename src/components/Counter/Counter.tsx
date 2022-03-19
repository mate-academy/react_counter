import React from 'react';
import './Counter.scss';

type State = {
  count: number,
};

class Counter extends React.Component<{}, State> {
  state: State = {
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
    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <section className="Counter">
        <div className="Counter__content">
          <h1 className="Counter__title">
            Count:
            {' '}
            {count}
          </h1>
          <div className="Counter__buttons">
            <button
              type="button"
              onClick={this.addOne}
              className="Counter__button"
            >
              add_1
            </button>
            <button
              type="button"
              onClick={this.add100}
              className="Counter__button"
            >
              add_100
            </button>
            <button
              type="button"
              onClick={this.increase}
              className="Counter__button"
            >
              increase
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Counter;