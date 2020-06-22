import React from 'react';

class Counter extends React.Component {
  state = {
    counter: 0,
  }

  increase = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increase} type="submit">++</button>
      </>
    );
  }
}

export default Counter;
