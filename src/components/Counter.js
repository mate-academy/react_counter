import React, { Component } from 'react';

class Counter extends Component {
    state = {
      count: 0,
    }

  addOne = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  add100 = () => {
    this.setState(state => ({ count: state.count + 100 }));
  };

  increase = () => {
    this.addOne();
    if ((this.state.count + 1) % 5 === 0 && this.state.count) {
      this.add100();
    }
  };

  render() {
    return (
      <div>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button type="button" onClick={this.addOne}>Add 1</button>
        <button type="button" onClick={this.add100}>Add 100</button>
        <button type="button" onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default Counter;
