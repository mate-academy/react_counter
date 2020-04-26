import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  }

  handСlick = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <>
        <h1 className="article">Please, press button!</h1>
        <h1 className="counter">
          Count:
          {' '}
          {this.state.count}
        </h1>
        <button
          type="button"
          className="button"
          onClick={this.handСlick}
        >
          Click
        </button>
      </>
    );
  }
}

export default Counter;
