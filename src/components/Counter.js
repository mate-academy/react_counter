import React from 'react';

export class Counter extends React.Component {
  state = {
    counter: 0,
  };

  increase = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>
          {`Count: ${this.state.counter}`}
        </h1>
        <button type="button" onClick={this.increase}>
          Click
        </button>
      </>
    );
  }
}
