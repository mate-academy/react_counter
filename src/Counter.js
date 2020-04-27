import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  changeCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>
          {`Count: ${this.state.count}`}
        </h1>

        <button onClick={this.changeCount} type="button">Click</button>
      </>
    );
  }
}

export default Counter;
