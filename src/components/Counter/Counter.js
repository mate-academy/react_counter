import React from 'react';
import './Counter.css';

export class Counter extends React.Component {
  state = {
    value: 0,
  }

  handleCounter = (evt) => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  }

  render() {
    const { value } = this.state;

    return (
      <div className="counter">
        <h1 className="counter__title">
          {`Count: ${value}`}
        </h1>
        <button
          type="button"
          className="counter__button"
          onClick={this.handleCounter}
        >
          Click Me
        </button>
      </div>
    );
  }
}
