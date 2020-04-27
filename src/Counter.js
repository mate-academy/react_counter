import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState(prev => ({
      count: prev.count + 1,
    }));
  };

  render() {
    return (
      <div className="counter">
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button
          className="btn_counter"
          type="button"
          onClick={this.handleClick}
        >
          Click
        </button>
      </div>
    );
  }
}

export default Counter;
