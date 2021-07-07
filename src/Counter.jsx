import React from 'react';
import './Counter.scss';

class Counter extends React.Component {
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

    this.addOne();

    if ((count + 1) % 5 === 0 && count !== 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <h1 className="counter__title">
          {`Count: ${count}`}
        </h1>
        <div className="buttons">
          <button
            className="buttons__first"
            type="button"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            className="buttons__second"
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            className="buttons__third"
            type="button"
            onClick={this.increase}
          >
            Surprise
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
