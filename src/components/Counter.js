import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  };

  state = {
    count: this.props.min,
  };

  handleIncrement = () => {
    this.set(this.state.count + 1);
  }

  handleDecrement = () => {
    this.set(this.state.count - 1);
  }

  set(newCnt) {
    const count = Math.min(Math.max(newCnt, this.props.min), this.props.max);

    this.setState({ count });
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>
          {`Count: ${count}`}
        </h1>
        <button type="button" onClick={this.handleIncrement}>+</button>
        <button type="button" onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
