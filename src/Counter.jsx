import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  }

  add100 = () => {
    this.setState(prev => ({ count: prev.count + 100 }));
  }

  increase = () => {
    this.setState((prev) => {
      if (prev.count % 5 === 0) {
        this.add100();
      } else {
        this.addOne();
      }
    });
  }

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button
          type="button"
          onClick={this.addOne}
        >
          addOne
        </button>
        <button
          type="button"
          onClick={this.add100}
        >
          add100
        </button>
        <button
          type="button"
          onClick={this.increase}
        >
          increase
        </button>
      </>
    );
  }
}

export default Counter;
