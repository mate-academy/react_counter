import React from 'react';
import './Counter.scss';

export class Counter extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(previousState => ({
      count: previousState.count + 1,
    }));
  };

  add100 = () => {
    this.setState(previousState => ({
      count: previousState.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="Counter">
        <h1>
          {`Count: ${count}`}
        </h1>

        <button
          type="button"
          onClick={this.addOne}
        >
          addOne
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          add100
        </button>

        <button
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}
