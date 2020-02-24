import React from 'react';
import './App.css';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  increase = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
Counter:
          {count}
        </h1>
        <button type="button" onClick={this.increase}>+</button>
      </>
    );
  }
}

export default Counter;
