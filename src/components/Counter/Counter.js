import React from 'react';

export class Counter extends React.Component {
  state = {
    count: 0,
  }

  handleButtonClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <h1>
          Count:
          { this.state.count }
        </h1>
        <button type="button" onClick={this.handleButtonClick}>
          increment me
        </button>
      </div>
    );
  }
}
