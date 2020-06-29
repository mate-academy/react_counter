import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    state = {
      counter: 0,
    };

    press = () => {
      this.setState(prevState => ({
        counter: prevState.counter + 1,
      }));
    };

    render() {
      return (
        <div className="wrapper">
          <h2>
            {`Counter: ${this.state.counter}`}
          </h2>
          <button
            type="button"
            className="btn btn-dark btn-lg"
            onClick={this.press}
          >
            Press
          </button>
        </div>
      );
    }
}

export default Counter;
