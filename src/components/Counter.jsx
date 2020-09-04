import React from 'react';

export class Counter extends React.Component {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  }

  add = () => {
    this.addOne();

    const { count } = this.state;

    if ((count + 1) % 5 === 0) {
      this.add100();
    }
  }

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>{`Count: ${count}`}</h1>
        <button onClick={this.addOne} type="button">
          Add 1
        </button>
        <button onClick={this.add100} type="button">
          Add 100
        </button>
        <button onClick={this.add} type="button">
          Add
        </button>
      </>
    );
  }
}
