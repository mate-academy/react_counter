import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div className="ui inverted segment wrapper-button">
        <h1 wrapper__title>Counter: {this.state.counter}</h1>


        <button
          type="button"
          className="ui inverted teal button btn"
          onClick={this.clickHandler}
        >
          Change counter
        </button>
      </div>
    );
  }
}

export default Counter;
