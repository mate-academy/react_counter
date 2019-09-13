import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  onButtonClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    const { onButtonClick, state: { counter } } = this;

    return (
      <>
        <button type="button" onClick={onButtonClick}>Click to add</button>
        <div>{counter}</div>
      </>
    );
  }
}

export default Counter;
