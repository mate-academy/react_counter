import React from 'react';

export class Counter extends React.Component {
  state = {
    value: 0,
  };

  handleClick = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  render() {
    return (
      <>
        <h1>{this.state.value}</h1>
        <button
          type="button"
          onClick={this.handleClick}
        >
          Increase by 1
        </button>
      </>
    );
  }
}
