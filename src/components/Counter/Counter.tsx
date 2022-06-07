import React from 'react';

export class Counter extends React.Component {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState: { count :number }) => ({ count: (prevState.count + 1) }));
  };

  add100 = () => {
    this.setState((prevState: { count :number }) => ({ count: (prevState.count + 100) }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
      this.addOne();
    } else {
      this.addOne();
    }
  };

  render() {
    return (
      <>
        <h1>{`Count: ${this.state.count}`}</h1>
        <button type="button" onClick={this.addOne}>
          Add 1
        </button>
        <button type="button" onClick={this.add100}>
          Add 100
        </button>
        <button type="button" onClick={this.increase}>
          Add some...
        </button>
      </>
    );
  }
}
