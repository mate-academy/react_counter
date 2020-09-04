import React from 'react';

export class Counter extends React.Component {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    this.addOne();
    const checkCount = this.state.count + 1;

    if ((checkCount % 5 === 0)) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1>
          {`Count: ${count}`}
        </h1>
        <button
          type="button"
          onClick={this.addOne}
        >
          Add one
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}
