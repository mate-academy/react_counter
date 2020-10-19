import React from 'react';

class Counter extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(state => ({
      counter: this.state.counter + 1,
    }))
  };

  add100 = () => {
    this.setState(state => ({
      counter: this.state.counter + 100,
    }))
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.setState(state => ({
        counter: this.state.counter + 101,
      }))
    } else {
      this.setState(state => ({
        counter: this.state.counter + 1,
      }))
    }
  };

  render() {
    return (
      <>
      <h1>Counter: {this.state.counter}</h1>

      <button onClick={this.addOne}>add 1</button>
      
      <button onClick={this.add100}>add 100</button>
      
      <button
      onClick={this.increase}
      >magic button
      </button>
      </>
    )
  }
}

export default Counter;