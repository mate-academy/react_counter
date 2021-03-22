import React from 'react';

export class Counter extends React.Component {
  
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }
    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <h1> {`Count - ${count}`}
        <button
          type="button"
          onClick={this.addOne}
        >
          +1
        </button>
        <button
          type="button"
          onClick={this.add100}
        >
          +100
        </button>
        <button
          type="button"
          onClick={this.increase}
        >
          Secret button
        </button>
      </h1>
    )
  }
}
