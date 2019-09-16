import React from 'react';

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  clickerCount = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <>
        <button
          name="clicker"
          className="ui button"
          onClick={this.clickerCount}
        >
          Click me
        </button>
        <div className="counter ui label">Counter: {this.state.counter}</div>
      </>
    );
  }
}

export default Counter;
