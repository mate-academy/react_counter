import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  }

  handleClick = () => {
    this.setState(
      prev => ({
        count: prev.count + 1,
      }
      ),
    );
  }

  render() {
    return (
      <>
        <h1>
          {`Count: ${this.state.count}`}
        </h1>
        <button type="button" onClick={this.handleClick}>click</button>
      </>
    );
  }
}

export default Counter;
