import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  increase = () => {
    this.setState(state => ({ count: state.count + 1 }));
  }

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button onClick={this.increase} type="button">Click</button>
      </>
    );
  }
}

export default Counter;
