import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 50 };
  }

  clickHandler = () => {
    this.setState(state => ({
      clicks: state.clicks + 1,
    }));
  }

  render() {
    return (
      <>
        <h1>
          Counter
        </h1>
        <h2>{this.state.clicks}</h2>

        <button type="button" onClick={this.clickHandler}>Click</button>
      </>
    );
  }
}

export default Counter;
