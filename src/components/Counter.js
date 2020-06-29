import React from 'react';

export class Counter extends React.Component {
  state = {
    counter: 0,
  }

  increase = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>
          { `Counter: ${this.state.counter} `}
        </h1>
        <button type="submit" onClick={this.increase}>Increase</button>
      </>
    );
  }
}
