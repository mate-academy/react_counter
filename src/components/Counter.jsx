import React from 'react';

export class Counter extends React.Component {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  addHundred = () => {
    this.setState((prevState) => ({
      count: prevState.count + 100,
    }));
  }

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.addHundred();
    }
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>Count: {count}</h1>
        <button type="button" onClick={this.addOne}>
          +1
        </button>

        <button type="button" onClick={this.addHundred}>
          +100
        </button>

        <button type="button" onClick={this.increase}>
          increase
        </button>
      </div>
    )
  }
}
