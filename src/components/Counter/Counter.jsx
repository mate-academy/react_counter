import React from 'react';

import './counter.scss';

export class Counter extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  };

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
    }))
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  clear = () => {
    this.setState({
      count: 0,
    });
  }

  render() {
    const { count } = this.state;

    return (
      <div className='counter'>
        <h1 className="counter__title">
          Count : {count}
        </h1>
        <div className="counter__buttons">
          <button
            className="counter__button counter__button-1"
            type="button"
            onClick={this.addOne}
          >
            Add One
          </button>
          <button
            className="counter__button counter__button-100"
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            className="counter__button counter__button-increase"
            type="button"
            onClick={this.increase}
          >
            Increase
          </button>

          <button
            className="counter__button counter__button-clear"
            type="button"
            onClick={this.clear}
          >
            Clear
          </button>
        </div>
      </div>
    )
  }
}
