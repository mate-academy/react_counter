import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.clickCounter = this.clickCounter.bind(this);
  }

  clickCounter() {
    return this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  render() {
    const { counter } = this.state;
    return (
      <>
        <button type="button" onClick={this.clickCounter}>Click it!</button>
        <div>{counter}</div>
      </>
    );
  }
}

export default Counter;
