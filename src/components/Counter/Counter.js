import React from 'react';
import './Counter.css';

export class Counter extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  increaseCounter = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }

  render() {
    return (
      <div className="counter">
        <h1>{`Count: ${this.state.count}`}</h1>
        <button
          className="button"
          type="button"
          onClick={this.increaseCounter}
        >
          Click me!
        </button>
      </div>
    );
  }
}
