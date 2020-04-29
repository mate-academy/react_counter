import React from 'react';

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.counter}
        </h1>
        <button
          className="btn"
          type="button"
          onClick={this.handleClick}
        >
          Increase!
        </button>
      </>
    );
  }
}

export default Counter;
