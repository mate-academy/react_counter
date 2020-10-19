import React from 'react';

class Counter extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }))
  };

  add100 = () => {
    this.setState(state => ({
      counter: state.counter + 100,
    }))
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
     this.add100();
    }
    this.addOne();
  };

  render() {
    const { counter } = this.state;
    return (
      <>
      <h1>Counter: {counter}</h1>

      <button onClick={this.addOne}>add 1</button>
      
      <button onClick={this.add100}>add 100</button>
      
      <button onClick={this.increase}>magic button</button>
      </>
    ) 
  }
}

export default Counter;