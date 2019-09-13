import React, { Component } from 'react';

class Counter extends Component {
  state = {
      value: 0,
    };

  resetCounter = () => this.setState({ value: 0 });

  changeValue = () => (
    this.setState(prevState => ({
      value: prevState.value + 1,
    }))
  );

  render() {
    const { value } = this.state;
    return (
      <div>
        <p>{value}</p>
        <button type="submit" onClick={this.changeValue}>
          click me
        </button>
        <button type="submit" onClick={this.resetCounter}>
          reset
        </button>
      </div>
    );
  }
}

export default Counter;
