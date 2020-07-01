import React from 'react';

export class Counter extends React.Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>
          Count:
          {this.state.counter}
        </h1>
        <br />
        <button type="button" onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}
