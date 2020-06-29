import React from 'react';

export default class Counter extends React.Component {
  state = {
    counter: 0,
  };

  clickHandler = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    return (
      <>
        <h1>Counter</h1>
        <h2>
          {this.state.counter}
        </h2>
        <button type="button" onClick={this.clickHandler}>
          Click
        </button>
      </>
    );
  }
}
