import React from 'react';

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  increaseCounter = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  render() {
    const { counter } = this.state;

    return (
      <>
        <h1>
          Count:
          {counter}
        </h1>
        <button
          type="button"
          onClick={this.increaseCounter}
        >
          Click
        </button>
      </>
    );
  }
}

export default Counter;
