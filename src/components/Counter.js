import React from 'react';

export default class Counter extends React.Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="counter">
        <button
          type="button"
          onClick={this.handleClick}
          className="counter__button"
        >
          Click
        </button>
        <div className="counter__caption">{`Counter: ${counter}`}</div>
      </div>
    );
  }
}
