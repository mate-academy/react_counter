import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    const { count } = this.state;

    return (
      <div className="wrapper">
        <button type="button" className="button" onClick={this.handleClick}>
          Increment Counter
        </button>
        <div className="counter">
          Count: {count}
        </div>
      </div>
    );
  }
}

export default Counter;
