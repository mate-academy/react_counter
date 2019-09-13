import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  onClickCounter = () => {
    this.setState(prevState => ({
      count: ++prevState.count,
    }));
  }

  render () {
    return (
      <>
        <div className="counter">
          Count: {this.state.count}
        </div>
        <button
          className="button"
          onClick={this.onClickCounter}
          type="button"
        >
          Click to increment!
        </button>
      </>
    );
  }
}


export default Counter;
