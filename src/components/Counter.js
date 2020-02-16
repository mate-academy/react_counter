import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  resetToZero = () => {
    this.setState({
      counter: 0,
    });
  }

  render() {
    return (
      <div className="counter">
        <h1 className="counter__title">{`Counter: ${this.state.counter}`}</h1>
        <button
          className="counter__button"
          type="button"
          onClick={this.increment}
        >
          I am add to counter + 1
        </button>
        <button
          className="counter__button"
          type="button"
          onClick={this.resetToZero}
        >
          I am reset Counter
        </button>
      </div>
    );
  }
}
