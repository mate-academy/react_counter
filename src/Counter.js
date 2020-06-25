import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => (
      { counter: prevState.counter + 1 }
    ));
  }

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.counter}
        </h1>
        <button type="submit" onClick={this.handleClick}>Click</button>
      </>
    );
  }
}
