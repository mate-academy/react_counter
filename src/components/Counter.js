import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  }

  click = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }

  render() {
    return (
      <>
        <h1>
          {`Count: ${this.state.count}`}
        </h1>
        <button type="button" onClick={this.click}>Click</button>
      </>
    );
  }
}

export default Counter;
