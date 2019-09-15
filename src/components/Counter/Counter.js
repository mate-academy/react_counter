import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.handleCounter = this.handleCounter.bind(this);
  }

  handleCounter() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  render() {
    const { counter } = this.state;

    return (
      <div className="place">
        <button
          type="button"
          className="btn btn-warning"
          onClick={this.handleCounter}
        >
          Add counter
        </button>
        <div>
          <h3>
            <span className="badge badge-secondary">
              {`Count: ${counter}`}
            </span>
          </h3>
        </div>
      </div>
    );
  }
}

export default Counter;
