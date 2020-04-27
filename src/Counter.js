import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  render() {
    return (
      <>
        <button
          type="button"
          onClick={this.increment}
        >
          Click
        </button>
        <h1>
          Count:
          {this.state.count}
        </h1>
      </>
    );
  }
}

export default Counter;
