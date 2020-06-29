import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  onBtnClick = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.counter}
        </h1>
        <button
          className="button"
          type="button"
          onClick={this.onBtnClick}
        >
          Increase!
        </button>
      </>
    );
  }
}

export { Counter };
