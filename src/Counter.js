import React from 'react';
import './Counter.scss';

class Counter extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
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
      <div className="counter">
        <h1 className="counter__title">
          {`Count: ${count}`}
        </h1>

        <div className="counter__buttons">
          <button
            type="button"
            onClick={this.addOne}
          >
            add 1
          </button>

          <button
            type="button"
            onClick={this.add100}
          >
            add 100
          </button>

          <button
            type="button"
            onClick={this.increase}
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
