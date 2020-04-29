import React from 'react';

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  setCounter = () => this.setState(
    state => ({
      counter: state.counter + 1,
    }),
  );

  render = () => (
    <>
      <h1>
        Count:
        {' '}
        {this.state.counter}
      </h1>
      <button type="button" onClick={this.setCounter}>
        Click me
      </button>
    </>
  )
}

export default Counter;
