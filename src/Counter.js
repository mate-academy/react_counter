import React from 'react';

class Counter extends React.Component {
  state = { counter: 0 };

  clickHandler = () => {
    this.setState(prevState => (
      { counter: prevState.counter + 1 }
    ));
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.counter}
        </h1>
        <button
          type="button"
          onClick={this.clickHandler}
        >
          Press
        </button>
      </>
    );
  }
}

export default Counter;
