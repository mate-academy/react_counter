import React from 'react';

class Counter extends React.Component {
  state = {
    counter: 0,
    totalCount: 0,
  }

  addOne = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  }

  add100 = () => {
    this.setState(state => ({ totalCount: state.totalCount + 100 }));
  }

  increase = () => {
    this.addOne();
    if (this.state.counter % 5 === 0 && this.state.counter !== 0) {
      this.add100();
    }
  }

  render() {
    const { counter, totalCount } = this.state;

    return (
      <>
        <button
          type="submit"
          onClick={this.addOne}
        >
          Add one
        </button>
        <button
          type="submit"
          onClick={this.add100}
        >
          Add 100
        </button>
        <button
          type="submit"
          onClick={this.increase}
        >
          Add one (? + 100)
        </button>
        <h1>{`Total count: ${counter + totalCount}`}</h1>
      </>
    );
  }
}

export default Counter;
