import React from 'react';

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  increase = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  render() {
    const { counter } = this.state;

    return (
      <>
        <h1>{`Count: ${counter}`}</h1>
        <button type="button" onClick={this.increase}>+</button>
      </>
    );
  }
}

export default Counter;
