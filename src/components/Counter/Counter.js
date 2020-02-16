import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  counter = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <>
        <h1>
          {`Count: ${this.state.count}`}
        </h1>
        <button type="button" onClick={this.counter}>Counter</button>
      </>
    );
  }
}

export default Counter;
