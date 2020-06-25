import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  }

  increment = () => {
    this.setState(state => ({ count: state.count + 1 }));
  }

  render() {
    return (
      <div>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button type="button" onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
