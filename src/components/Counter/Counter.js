import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState(prevState => (
      { count: prevState.count + 1 }
    ));
  }

  render() {
    return (
      <div>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <br />
        <button type="button" onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}

export { Counter };
