import React from 'react';

class Counter extends React.Component {
  state = {
    counter: 0,
  }

  onClick = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  }

  render() {
    return (
      <>
        <h1>
          {`Count: ${this.state.counter}`}
        </h1>
        <button type="button" onClick={this.onClick}>Click</button>
      </>
    );
  }
}

export default Counter;
