import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickCount: 0,
    };
  }

  handleClick() {
    this.setState(state => ({
      clickCount: state.clickCount + 1,
    }));
  }

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.clickCount}
        </h1>
        <button type="button" onClick={() => this.handleClick()}>Click</button>
      </>
    );
  }
}

export default Counter;
