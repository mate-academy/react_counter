import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }

    this.updateCount = this.updateCount.bind(this);
  }

  updateCount() {
    this.setState(prevState => (
      {
        ...prevState,
        count: this.state.count + 1
    }));
  }

  render() {
    return (
      <>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.updateCount} className="ui primary button">
          Click me
        </button>
      </>
    );
  }
}

export default Counter;
