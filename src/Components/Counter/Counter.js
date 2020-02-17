import React from 'react';

export class Counter extends React.Component {
  state = {
    counter: 0,
  }

  handleClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>
          Counter:
          {this.state.counter}
        </h1>
        <button
          type="button"
          onClick={this.handleClick}
        >
        click me
        </button>
      </>
    );
  }
}
