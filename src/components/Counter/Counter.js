import React, { Component } from 'react';
import './Counter.css';

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    this.setState(prevState => (
      { count: prevState.count + 1 }
    ));
  }

  decrementCount() {
    this.setState(prevState => (
      { count: prevState.count - 1 }
    ));
  }

  render() {
    return (
      <div>
        <h1>
Count:
          {this.state.count}
        </h1>
        <span>
          <button
            type="button"
            onClick={() => this.incrementCount()}
            className="button"
          >
+
          </button>
          <button
            type="button"
            onClick={() => this.decrementCount()}
            className="button"
          >
-
          </button>
        </span>
      </div>
    );
  }
}
