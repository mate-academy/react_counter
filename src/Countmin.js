import React from 'react';

class Countmin extends React.Component {
  state = {
    count: 0,
  };

  decrement = () => {
    this.setState(state => ({
      count: state.count - 1,
    }));
  };

  render() {
    return (
      <>
        <button
          type="button"
          onClick={this.decrement}
        >
          Click
        </button>
        <h1>
          Count:
          {this.state.count}
        </h1>
      </>
    );
  }
}

export default Countmin;
