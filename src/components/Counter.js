import React from 'react';

export class Counter extends React.Component {
  state = {
    counter: 0,
  };

  increase = () => {
    this.setState(prevState => (
      { counter: prevState.counter + 1 }));
  }

  render() {
    const { counter } = this.state;

    return (
      <>
        <h1>
          Counter:
          {counter}
        </h1>
        <button
          type="button"
          onClick={this.increase}
          className="btn btn-primary btn-sm"
        >
          +
        </button>
      </>
    );
  }
}
