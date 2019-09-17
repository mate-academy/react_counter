import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  handleCounter = () => this.setState(prevState => (
    {
      counter: prevState.counter + 1
    }
    ));

  render() {
    const { counter } = this.state;
    const {  handleCounter } = this;

    return (
      <div className="place">
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleCounter}
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
