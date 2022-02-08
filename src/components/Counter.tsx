import React from 'react';
import './Counter.scss';

type State = {
  count: number,
};

type Props = {
  counter: number,
};

class Counter extends React.Component<Props, State> {
  state = {
    count: this.props.counter,
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
      <div className="counter">
        <h1 className="counter__title">
          Count:
          {' '}
          {count}
        </h1>
        <div className="counter__button-block">
          <button
            className="counter__button-block-btn"
            type="button"
            onClick={this.addOne}
          >
            Count: +1
          </button>
          <button
            className="counter__button-block-btn"
            type="button"
            onClick={this.add100}
          >
            Count: +100
          </button>
          <button
            className="counter__button-block-btn"
            type="button"
            onClick={this.increase}
          >
            Multiplicity 5
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
