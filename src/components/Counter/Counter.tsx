import React from 'react';
import './Counter.scss';

interface State {
  counter: number,
  increaseTimes: number,
}

export default class Count extends React.Component<{}, State> {
  state:State = {
    counter: 0,
    increaseTimes: 0,
  };

  addOne = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  add100 = () => {
    if (this.state.increaseTimes < 4) {
      this.setState(({ counter }) => ({ counter: counter + 100 }));
    } else {
      this.setState(({ counter }) => ({ counter: counter + 101 }));
    }
  };

  increase = () => {
    if (this.state.counter === 0) {
      this.setState(({ counter }) => ({ counter: counter + 101 }));
    } else if (this.state.increaseTimes < 4) {
      this.addOne();
      this.setState(({ increaseTimes}) => ({ increaseTimes: increaseTimes + 1 }));
    } else {
      this.add100();
      this.setState({ increaseTimes: 0 });
    }
  };

  reset = () => {
    this.setState({ counter: 0, increaseTimes: 0 });
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="counter">
        <h1 className="counter__title" onClick={this.reset} onKeyDown={this.reset}>
          Count:
          {counter}
        </h1>

        <button type="button" className="button button__addone" onClick={this.addOne}>
          Add one
        </button>

        <button type="button" className="button button__addhund" onClick={this.add100}>
          Add 100
        </button>

        <button type="button" className="button button__increase" onClick={this.increase}>
          Increase
        </button>
      </div>
    );
  }
}
