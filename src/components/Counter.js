import React , { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

  }

  getCount = () => {
    this.setState(state => ({
      ...state,
      counter: state.counter + 1,
    }));
  };

  render() {
    return (
    <>
      <button onClick={this.getCount}>Click here</button>
      <div>Count:{this.state.counter}</div>
    </>
    );

  }
}

export default Counter;
